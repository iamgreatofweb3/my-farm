import "./partner.css"
export default function partner() {
    return (
        <>
        <div className="formContainer" id="partner">
            <h1>Let's Build a Healthier Future Together</h1>
        </div>
        <form action="submit">
            <div className="grid">

            <label htmlFor="Text">
              <input type="text" placeholder="Company Name" />

            </label>

            <label htmlFor="email">
                <input type="email"  id="email" placeholder="Email Address" />
            </label>

            <label htmlFor="phone">
                <input type="tel"  id="number" placeholder="Phone" />
            </label>

            <label htmlFor="city">
                <input type="text" name="" id="city" placeholder="City"/>
            </label>
            </div>
            <div className="textSection">

            <label htmlFor="textarea" >
                <textarea name="" id="textArea" placeholder="Message" >

                </textarea>
            </label>
            </div>
      </form>
        </>
    )
}