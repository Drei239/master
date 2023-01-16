import Footer from "../components/Footer";
import "./ContactPage.css"
const ContactPage = () => {
    const onSubmit = () => {
        console.log("trung")
    }

    return (
        <>
            <header>
                <h1> liên hệ với chúng tôi</h1>
            </header>

            <div id="form">

                <div class="fish" id="fish"></div>
                <div class="fish" id="fish2"></div>

                <form id="waterform" method="post">

                    <div class="formgroup" id="name-form">
                        <label for="name">Your name*</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div class="formgroup" id="email-form">
                        <label for="email">Your e-mail*</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div class="formgroup" id="message-form">
                        <label for="message">Your message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>

                    <input type="submit" onClick={onSubmit} />
                </form>
            </div>

        </>
    )
}
export default ContactPage;