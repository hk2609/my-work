import React, { Component } from "react";

class Constructor01 extends Component {
  render() {
    return (
      <>
        <div className="container">

        <div>
          <p>
            The constructor is a method used to initialize an object's state in
            a class. It automatically called during the creation of an object in
            a class. The concept of a constructor is the same in React. The
            constructor in a React component is called before the component is
            mounted.
          </p>
          <p>
            કન્સ્ટ્રક્ટર એ એક પદ્ધતિ છે જેનો ઉપયોગ વર્ગમાં ઑબ્જેક્ટની સ્થિતિ શરૂ
            કરવા માટે થાય છે. તે વર્ગમાં ઑબ્જેક્ટની રચના દરમિયાન આપમેળે કૉલ થાય
            છે. કન્સ્ટ્રક્ટરનો ખ્યાલ પ્રતિક્રિયામાં સમાન છે. કમ્પોનન્ટ માઉન્ટ
            થાય તે પહેલાં પ્રતિક્રિયા ઘટકમાં કન્સ્ટ્રક્ટરને બોલાવવામાં આવે છે
          </p>
        </div>
        <div>
          <p>
            In React, constructors are mainly used for two purposes: <br />
            1. It used for initializing the local state of the component by
            assigning an object to this.state. <br />
            2. It used for binding event handler methods that occur in your
            component. <br />
            Note: If you neither initialize state nor bind methods for your
            React component, there is no need to implement a constructor for
            React component.
          </p>

          <p>
            प्रतिक्रिया में, कंस्ट्रक्टर मुख्य रूप से दो उद्देश्यों के लिए उपयोग
            किए जाते हैं: <br />
            यह इस.स्टेट को ऑब्जेक्ट निर्दिष्ट करके घटक की स्थानीय स्थिति को
            प्रारंभ करने के लिए उपयोग किया जाता है। <br />
            यह आपके घटक में होने वाली ईवेंट हैंडलर विधियों को बाइंड करने के लिए
            उपयोग किया जाता है।
            <br />
            नोट: यदि आप अपने रिएक्ट कंपोनेंट के लिए न तो स्टेट इनिशियलाइज़ करते
            हैं और न ही बाइंड मेथड, तो रिएक्ट कंपोनेंट के लिए कंस्ट्रक्टर को
            लागू करने की कोई आवश्यकता नहीं है।
          </p>
        </div>
        The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
        </div>
      </>
    );
  }
}

export default Constructor01;
