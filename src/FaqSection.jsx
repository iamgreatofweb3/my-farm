import { useState } from "react";
import {Plus,Minus, Recycle} from "lucide-react"
import "./FaqSection.css"
export default function FaqSection() {
    const [open,setOpen]= useState(false)
    const [active,setActive]= useState(false)
    const [click,setClick] = useState(false)
    const [btnClick,setBtnClick]=useState(false)
    return (
        <>
        <div className="accordion">

           <div className="accordionContainer">
              <div className="accordionHeader"
             onClick={()=>setOpen(!open)}
             >
                What are the benefits of Organic Farming
                {open? <Minus size={30}/> : <Plus size={30}/>}
              </div>
               {open&& (
                <div className="accordionAnswers">
                    <p>
                        <strong>Healthier Produce:</strong> Organically grown crops generally avoid synthetic chemical residues and often contain higher levels of key nutrients 
                        like Vitamin C, iron, and heart-healthy omega-3 fatty acids...
                    </p>
                </div>
            )}
           </div>
        
            <div className="accordionContainer">
              <div className="accordionHeader"
             onClick={()=>setActive(!active)}
             >
                How does Crop rotation improve soil health
                {active? <Minus size={30}/> :<Plus size={30}/>}
            </div>
               {active&&(
              <div className="accordionAnswers">
                 <p>
                  <strong>  Stops nutrient depletion:</strong>
                  Different crops pull different nutrient from the soil.Crop rotation maintains
                  the soil balance by adding nitrogen back through if planted with legumes...
                 </p>
              </div>
           )}
           </div>

           <div className="accordionContainer">
                <div className="accordionHeader"
                 onClick={()=> setClick(!click)} 
                 >
                 What natural method of pest control can be used in Organic Farming 
                 {click ? <Minus size={40}/> : <Plus size={40}/>}
                </div>
            {click&&(
                <div className="accordionAnswers">
                    <p>
                        <strong>Biological Process:</strong>
                        Releasing Predator of the pests into the field to naturally 
                        eliminate them through continous feeding of them...
                    </p>
                </div>
            )}
        </div>
        <div className="accordionContainer">
            <div className="accordionHeader"
            onClick={()=>setBtnClick(!btnClick)}
            >
                What is the role of compost in agriculture
                {btnClick? <Minus size={30}/> : <Plus size={30}/>}
            </div>
            {btnClick&& (
                <div className="accordionAnswers">
                    <p>
                        <strong>Feed's the soil and not just plant : </strong>
                        compost is full of decomposed organic matters,so as it breaks 
                        down it slowly release nitrogen,phosphorous,potassium 
                        and other micronutrients...
                    </p>
                </div>
            )}
        </div>
            </div>
 
        </>
    )
}










