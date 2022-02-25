#include "LiquidCrystal_I2C.h" 
#include "wire.h" 

#define TRUE 1
#define FALSE 0
#define DEBUG FALSE

/******************************************************************/
/* basic constants that control the program                       */
/******************************************************************/
#define THERMISTOR A2 
#define THERMISTORDIGITAL 11

#define LEDGREEN 8 
#define LEDBLUE 7
#define LEDRED 9 
#define RED 1
#define BLUE 2 
#define GREEN 3
#define LEDHIGH 30
const float LEDMEDHIGH = 0 ;
const float LEDMED = 50 ;
const float LEDMEDLOW = 30.01 ;
const float LEDLOW = 90 ;
const float LEDLOWW = 50.01 ;

const int FIXEDRESISTOR = 10000 ; 
const int SAMPLES = 12 ;
const int BCOEFFICIENT = 3976 ;
const int RESISTANCEROOM = 10000 ; 
const int VREF = 5 ;
const int ADCMAX = 1023 ;
const float TempDelta = .05 ;

float LastTemp = 0 ;
int DataReading = 1 ;
float PreviousTemp = 80;

LiquidCrystal_I2C lcd(0x3f,16,2); 



/*************************************************************************/
/*  Set the Pins that are going to be used in the program to start       */
/*  working.                                                             */
/*************************************************************************/
void setup() {
 //set up pins for leds and the thermistor
 pinMode(THERMISTORDIGITAL,OUTPUT);
 pinMode(THERMISTOR,INPUT);
 pinMode(LEDRED,OUTPUT);
 pinMode(LEDBLUE,OUTPUT);
 pinMode(LEDGREEN,OUTPUT);

 digitalWrite(THERMISTORDIGITAL,LOW);
 //Start Monitor for debugging purposes
 Serial.begin(9600);

 //Set up the display
 lcd.init();
 lcd.backlight();

 lcd.setCursor(2,0);
 lcd.print("SciOly  2020");
 lcd.setCursor(1,1);
 lcd.print("Detector Build");
 delay(2000);
 lcd.clear();
 lcd.setCursor(0,0);
 lcd.print("TVHSOT-Idaho-C2");
 delay(1000);
 
}

/*******************************************************************************/
/*  The heart of the program that recives the numbers from the                 */
/*  subroutines and tells the program when to use them and in what order to it.*/
/*******************************************************************************/
void loop() {
  float reading;
  float Volts; 
  float Resistance;
  float CurrentTempC;
  float CurrentTempF;
  int ColorLed;
  int Stabalized = 0;

    
  reading = readtemp();
  Volts = ConvertToVolts(reading) ; 
  Resistance = ConvertReadingToResistance(reading);
  CurrentTempC = ConvertResistanceToCelcius(Resistance);
  CurrentTempF = ConvertCtoF(CurrentTempC);
  Stabalized = StabalizeTemp(CurrentTempC);

 
      
  if (Stabalized == 1){
    
      if (PreviousTemp-CurrentTempC >= 0.40 ){

      Serial.print(DataReading);
      Serial.print(",") ;
      Serial.print(CurrentTempC,4) ;
      Serial.print(",") ;
      Serial.print(Volts,4) ;
      Serial.print(",") ;
      Serial.print(Resistance,4) ;
      Serial.print(",") ;
      Serial.println() ;
     
      DataReading += 1 ;
      PreviousTemp = CurrentTempC ;
      }
    ColorLed = LedOn(CurrentTempC);
    WriteDisplay(CurrentTempC,Volts);
  }

 /* Serial.print("Temp Stabalization : ");
  Serial.print(Stabalized);
  Serial.print(" Led is: ");
  Serial.print(ColorLed);  // it should print something like 321 (if all 3 colors are on)   or 21, or 320 or etc...  
  Serial.print(" Resistance: ");
  Serial.print(Resistance);
  Serial.print(" Volts: ");
  Serial.print(Volts);
  Serial.print(" Temp C: ");
  Serial.print(CurrentTempC);
  Serial.print(" Temp F: ");
  Serial.print(CurrentTempF);
  Serial.print(" Led is: ");
  Serial.print(ColorLed);
  Serial.println();*/
  
    
 delay(1000);

}

/*************************************************************************/
/* The section of the program that gathers samples then averages them    */
/* and then returns the averageto be used.                               */
/*************************************************************************/
float readtemp(){
  float Reading[SAMPLES] ; 
  float Average=0;
 
  digitalWrite(THERMISTORDIGITAL,HIGH);
  //Serial.println("on");
  
  for(int i=0;i<SAMPLES;i++){  
   Reading[i] = analogRead(THERMISTOR);
   delay(10);

   if (DEBUG){
     Serial.print("    reading: ");
     Serial.println(Reading[i]);
   }

  }

  digitalWrite(THERMISTORDIGITAL,LOW);
  //Serial.println("off");

  if (DEBUG) {
    Serial.print("final reading is:");
    Serial.println(Reading[SAMPLES -1]);
  }

  Average = 0 ;
  for(int k=0;k<SAMPLES;k++){
  Average = Average + Reading[k];
  }
  Average /= SAMPLES ;

  if (DEBUG){
    Serial.print("Average Analog Reading = ");
    Serial.println(Average);
  }

  return Average;

}

/*************************************************************************/
/* Takes the average of the samples and finds the volts then returns     */
/* that number.                                                          */
/*************************************************************************/
float ConvertToVolts (float Average) {
// VOLTS
  float Volts;
  Volts = Average * VREF / ADCMAX;

  if (DEBUG){
    Serial.print ("Voltage is: ");
    Serial.println(Volts);
  }

  return Volts;

}

/*************************************************************************/
/* Takes the average of the samples and finds the resistance of the      */
/* thermistor and returns that number.                                   */
/*************************************************************************/
float ConvertReadingToResistance(float Average){
//take the average of our readings and return resistance
  float Resistance;

  Resistance = Average;
  Resistance = ADCMAX/Resistance - 1 ;
  Resistance = FIXEDRESISTOR / Resistance ; 

  if (DEBUG){
      Serial.print("Resistance Value = ") ; 
      Serial.println(Resistance);
  }

  return Resistance;

}


/*************************************************************************/
/* Takes the resistance and uses the Steinhart equation for Thermistors  */
/* to convert the resistance to degrees in Celisus.                      */
/*************************************************************************/
float ConvertResistanceToCelcius(float Resistance){
 //STEINHART equation for thermistors... convert resistance to C
 //TODO descript steinhart a bit
  float CurrentTemp;
  
  CurrentTemp = Resistance / RESISTANCEROOM ; 
  CurrentTemp = log(CurrentTemp) ;
  CurrentTemp /= BCOEFFICIENT ;
  CurrentTemp += 1.0 / (273.15 + 25) ; 
  CurrentTemp = 1.0 / CurrentTemp ;
  CurrentTemp -= 273.15 ;
  CurrentTemp -= 2.00 ;

  if (DEBUG){
    Serial.print("Temperature = ");
    Serial.println(CurrentTemp);
  }

  return CurrentTemp;
}

/*************************************************************************/
/* Takes the degress in Celsius and turns it into Fahrenheit then returns*/
/* that number                                                          */
/*************************************************************************/
float ConvertCtoF(float C){
//FAHRENHEIT
  float Fahrenheit;

  Fahrenheit = C ;
  Fahrenheit /= 5 ;
  Fahrenheit *= 9 ;
  Fahrenheit += 32 ; 

  if (DEBUG){
    Serial.print("Temp in Fahrenheit = ") ;
    Serial.println(Fahrenheit) ; 
  }
  return Fahrenheit;
}

int StabalizeTemp(float TempC){ 

  if(abs(TempC-LastTemp) > TempDelta){
    lcd.clear();
    lcd.setCursor(1,0);
    lcd.print("Stabilizing");
    lcd.setCursor(1,1);
    lcd.print(TempC);
    lcd.setCursor(6,1);
    lcd.print("C");
    
    if(DEBUG){
      Serial.println("Stabilizing");
      Serial.println(TempC);
      Serial.println(LastTemp);
    } 
    LastTemp = TempC ;
    return 0 ;
  }
 else{
    if(DEBUG){
      Serial.println("Stabilized");
      Serial.println(TempC);
      Serial.println(LastTemp);
    }
    LastTemp = TempC ;
    return 1 ;
  }

  

}

/*************************************************************************/
/* LedOn (temp) - takes a temperature and turns on the appropriate LED   */
/*                based on the global setpoints                          */
/*************************************************************************/
int LedOn (float temp) {

  int ledColor = 0 ;
  
  digitalWrite(LEDGREEN,LOW);
  digitalWrite(LEDBLUE,LOW);
  digitalWrite(LEDRED,LOW);
  
  
  if(temp>LEDMEDHIGH && temp< LEDHIGH){
    digitalWrite(LEDRED,HIGH);
    ledColor += RED;
  }
  if(temp>LEDMEDLOW && temp<LEDMED){
    digitalWrite(LEDGREEN,HIGH);
    ledColor += 10 * BLUE;
  }
  if(temp>LEDLOWW && temp<LEDLOW){
    digitalWrite(LEDBLUE,HIGH);
    ledColor += 100 * GREEN;
  }
  if (DEBUG){
  Serial.print("led is : ");
  Serial.println(ledColor);
  }

  return ledColor; // I am only returning a number here for debugging purposes 

}

/***************************************************************/
/* Take the information given, make sure it is stabalized,     */
/* and write that on the display.                              */
/***************************************************************/
void WriteDisplay (float TempC, float Volts){

  
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Temp is:");
    lcd.setCursor(9,0);
    lcd.print(TempC);
    lcd.setCursor(14,0);
    lcd.print("C");

    if(DEBUG){
      Serial.println("Display Temp Printed");
    }

    lcd.setCursor(0,1);
    lcd.print("Volts are:");
    lcd.setCursor(10,1);
    lcd.print(Volts);
    lcd.setCursor(14,1);
    lcd.print("V");

    if(DEBUG){
      Serial.println("Display Volts Printed"); 
    }
    
}
