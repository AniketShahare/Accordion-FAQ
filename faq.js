const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
  
];


const accordianBody = document.querySelector(".accordian_body");
const faqs = [];


function showFaq(e) {
  document.getElementById("ans" + e).setAttribute("class","showAns")
  btnStatusUpdate(e)
}


function createFaq() {
  for (const items in faqData) {
   
    // FAQ Div 
    let faqItems = document.createElement("div");
    faqItems.className = "faq";
    faqItems.id = "faq" + faqData[items].id;
    accordianBody.appendChild(faqItems);

    // FAQ Questions(h3) in Faq Div 
    let faqHeader = document.createElement("h3");
    faqHeader.className = "faq_header";
    faqHeader.id = "header" + faqData[items].id;
    faqHeader.textContent = faqData[items].question;
    faqItems.appendChild(faqHeader);


    // FAQ Answers(p) in FAQ Div 
     let faqAns = document.createElement("p");
     faqAns.className = "hidden";
     faqAns.id = "ans" + faqData[items].id;
     faqAns.textContent = faqData[items].answer;
     faqItems.appendChild(faqAns);

    // Show Button in FAQ Div
     let showBtn = document.createElement("i");
     showBtn.className = "show_btn";
     showBtn.textContent = "+";
     showBtn.id = faqData[items].id;
     showBtn.setAttribute("onclick", "showFaq("+faqData[items].id+")");
     faqHeader.appendChild(showBtn);
     showBtn.style.textAlign = "center";
  }
}
createFaq();


function btnStatusUpdate(e)  {
  let showBtn = document.getElementById(e);
  if (showBtn.innerText == "+") {
    showBtn.innerText = "-";
  } else {
    showBtn.innerText = "+";
    document.querySelector("#ans" +e).setAttribute("class", "hidden");
  }
}




