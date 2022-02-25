//Create a program named yournameGradeReport that creates three ReportCard objects. Prompt the user for the
//values for each grade report. Handle any thrown exceptions by displaying an error message.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace JoelWGradeReport
{
    class Program
    {
        static void Main(string[] args)
        {
            ReportCard[] students = new ReportCard[3];

            string inputName;
            double inputMidterm;
            double inputFinal;

            //gather values from the user
            for (int x = 0; x < students.Length; ++x)
            {
                WriteLine();
                Write("Please enter the students name >> ");
                inputName = ReadLine();
                try
                {
                    Write("Please enter {0}'s midterm grade >> ", inputName);
                    inputMidterm = double.Parse(ReadLine());
                    if (inputMidterm <= 0 || inputMidterm > 100)// testing midterm value
                    {
                        ArgumentException exception = new ArgumentException();
                        throw exception;
                    }

                    Write("Lastly, please enter {0}'s final grade >> ", inputName);
                    inputFinal = double.Parse(ReadLine());
                    if (inputFinal <= 0 || inputFinal > 100)// testing Final value
                    {
                        ArgumentException exception = new ArgumentException();
                        throw exception;
                    }

                    students[x] = new ReportCard(inputName, inputMidterm, inputFinal);
                    WriteLine(students[x].ToString());
                }
                catch (FormatException e)
                {
                    WriteLine("     ** The midterm or final grade value was not a numeric value **");
                    WriteLine("     You will have to re-enter the student's grade information.");
                    --x;
                }
                catch (ArgumentException e)
                {
                    WriteLine(e.Message);
                    --x;
                }
                //clean up the values so they dont carry over into the next iteration of For
                finally
                {
                    inputName = "";
                    inputMidterm = 0;
                    inputFinal = 0;
                }
            }//end for
        }// end main
    }// end program
    class ReportCard
    {
        //feilds
        private string studentName;
        private double midtermGrade;
        private double finalGrade;
        private char gradeReport;
        //properties
        public string StudentName
        {
            get { return studentName; }
            set { studentName = value; }
        }
        public double MidtermGrade
        {
            get { return midtermGrade; }
            set { midtermGrade = value; }
        }
        public double FinalGrade
        {
            get { return finalGrade; }
            set
            {
                finalGrade = value;
                gradeReport = LetterGradeCalc(midtermGrade, finalGrade);
            }
        }
        //constructors
        public ReportCard(string name, double midterm, double final)
        {
            StudentName = name;
            MidtermGrade = midterm;
            FinalGrade = final;
        }
        public ReportCard()
        {
        }
        //calculate the grade
        private char LetterGradeCalc(double midterm, double final)
        {
            double avg;
            avg = midterm + final;
            avg /= 2;
            if (avg >= 90 && avg <= 100)
                return 'A';
            else if (avg >= 80 && avg < 90)
                return 'B';
            else if (avg >= 70 && avg < 80)
                return 'C';
            else if (avg >= 60 && avg < 70)
                return 'D';
            else
                return 'F';
        }// end Letter Grade Claculations

        //ToString() Override
        public override string ToString()
        {
            return "\nGrade Report for " + studentName + ", " + gradeReport;
        }
    }// end report card
    class ArgumentException : Exception
    {
        private static string message = "Please input a grade that is bettween 0 and 100";
        public ArgumentException() : base(message)
        {
        }
    }// end Argument Exception
}// end namespace
