
function Contact() {
    return (
        <div class="container border-top mt-3">
            <h2 class="text-center">Please, get in contact with me!</h2>
            <p class="text-center">"*" means required.</p>
            <form class="row text-center mb-5" id="form1">
                <label for="company">Company Name:</label><span class="text-danger" id="company1">*</span><br />
                <input type="text" name="compName" size="50" id="company" /><br />

                <label for="name">Your Name:</label><span class="text-danger" id="name1">*</span><br />
                <input type="text" name="name" size="50" id="name" /><br />

                <label for="email">Your Email:</label><span class="text-danger" id="email1">*</span><br />
                <input type="text" name="email" size="50" id="email" /><br />

                <label for="confirm">Confirm Email:</label><span class="text-danger" id="confirm1">*</span><br />
                <input type="text" name="confirm" size="50" id="confirm" /><br />

                <label for="phone">Phone Number:</label><span id="phone1"></span><br />
                <input type="text" name="phone" size="50" id="phone" /><br /><br />

                <label for="comment">Enter your comments:</label><br />
                <textarea cols="100" rows="10" name="comment" id="comment"></textarea><br /><br />

                <fieldset>
                    <legend>Choose how you heard of me</legend>

                    <input type="radio" id="Github" name="method" />
                    <label for="Github">Github</label><br />

                    <input type="radio" id="Application" name="method" />
                    <label for="Application">Application</label><br />

                    <input type="radio" id="Wordofmouth" name="method" />
                    <label for="Wordofmouth">Word of mouth</label>
                </fieldset><br />

                <label for="Work">Choose needed work:</label><br />

                <select name="workneed" id="Work">
                    <option value="Neither">Neither</option>
                    <option value="frontend">Front-End</option>
                    <option value="backend">Back-End</option>
                </select>

                <input type="button" id="contact" value="Contact Me" />
                <input type="button" id="reset1" value="Reset" /><br /><br />

            </form>
        </div>
    );
}

export default Contact;