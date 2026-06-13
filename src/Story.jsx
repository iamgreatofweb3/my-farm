import "./Story.css"
export default function Story () {
    return (
        <>
        <div className="storyContainer">
            <div className="leftStory">
                <h1 id="story">Our Story</h1>
            </div>
            <div className="rightStory">
                <h3>Verdura Organica started with a simple vision -
                    to make healthy,chemical-free food,fruits and vegetables accessible for 
                    everyone. We use eco-friendly farming pratices to 
                    protect soil health, and also ensure that every crop
                    is grown naturally- just as nature intended.
                </h3>
                <button><a href="#">Read More</a></button>
            </div>
        </div>
        </>
    )
}