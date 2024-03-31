// npm install react-transition-group @material-ui/core @material-ui/icons

import React, { useContext, useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  
 
    const [faqs, setFaqs] = useState([
      {
        question: 'What problems does this FarmLand connect platform solve?',
        answer: 'FarmLand Connect streamlines land transactions for both buyers and tenants, as well as landowners. It offers a wide range of listings, reduces brokerage fees, and ensures trust between parties. Landowners can easily find tenants/buyers, manage listings remotely, and access guidance on pricing and legal matters.'
      },
      {
        question: 'How to upload a farmland listing?',
        answer: 'Go to Add FarmLand from the top header.  Fill the form details. Basic details include – listing title for your farmland, owner name of the farmland, number of owners if joint ownership. Enter Khata number and Survey number of your land. These details are present on government sites and your legal documentation. Add address parameters. Provide description for your farmland including earliest availability, any other features present in and around your land. Provide area in acres. Provide your expected price of the land. Input different crops possible to grow on the land. Add irrigation parameters such as canal, tubewell, drip irrigation etc., present on your land. Further upload image of your land, legal documentation (which are publicly available on government websites) and select your land boundary on the map. Click on finish to upload your listing.'
      },
      {
        question: 'What is the map feature on FarmLand connect and how to use it?',
        answer: 'Put your farmland location in the address field present on the first page of the form you have to fill while uploading your listing. On the second page, map is automatically directed towards that address. Zoom in/out as required to find your land on the map. Click on 4 corners of your land in a sequential manner. This selects the 4 coordinates of your land’s location and draws a contour/boundary. This helps for the farmland viewer/ potential buyer in easily locating your land on map and look at the surroundings of the land. '
      },
      {
        question: 'What are the different documents I have to upload while posting a farmland listing on FarmLand Connect?',
        answer: 'Documents from farmland lister – 7/12, 8A (Land record), LandMap, Any title document (sale deed, gift deed, legal heir, will), Title clear declaration (After title search), other docs (soil quality report, water quality report). These are publicly available documents and are available on government open websites and platforms for downloading. Authenticity of the same can be checked from there. '
      },
      {
        question: 'What is LegalAId Chatbot?',
        answer: 'LegalAId is a Generative AI assistant chatbot to aid in all your legal queries regarding the process of buying a farmland. Ask away your doubts on title search, 7/12 documents, title documents, power of attorney, process of buying a land, price and location factors to consider, sale deed contents and more. '
      },
      {
        question: 'What are the various B2B services offered by FarmLand Connect?',
        answer: 'Opt for our lawyer services for thorough title searches, ensure physical land possession verification, and seamlessly integrate with soil and water quality testing agencies. Connect with our expert agronomists to unlock insights about your chosen land. Elevate your decisions with our comprehensive suite of services.'
      }
     
     
    ]);

    const [faqs_hindi, setFaqs_hindi] = useState([
        {
          "question": "फार्मलैंड कनेक्ट प्लेटफ़ॉर्म कौन सी समस्याओं का समाधान करता है?",
          "answer": "फार्मलैंड कनेक्ट क्रेताओं और किरायेदारों के लिए जमीन सौदों को सरल बनाता है, साथ ही जमीन के मालिकों के लिए भी। यह एक विस्तृत लिस्टिंग प्रदान करता है, दलाली शुल्क को कम करता है, और पक्षों के बीच विश्वास को सुनिश्चित करता है। जमीन के मालिक आसानी से किरायेदारों / खरीददारों को ढूंढ सकते हैं, अपनी लिस्टिंग को दूरस्थ से प्रबंधित कर सकते हैं, और मूल्य और कानूनी मुद्दों पर मार्गदर्शन प्राप्त कर सकते हैं।"
        },
        {
          "question": "फार्मलैंड लिस्टिंग कैसे अपलोड करें?",
          "answer": "ऊपरी हेडर से Add FarmLand पर जाएं। फ़ॉर्म विवरण भरें। मूल विवरण शामिल हैं - आपकी फार्मलैंड के लिस्टिंग के लिए शीर्षक, आपकी फार्मलैंड के मालिक का नाम, यदि संयुक्त स्वामित्व है तो मालिकों की संख्या। अपनी ज़मीन का खता नंबर और सर्वेक्षण नंबर दर्ज करें। यह विवरण सरकारी साइटों पर मौजूद हैं और आपके कानूनी दस्तावेज़ में हैं। पता देने के लिए पता प्राप्त करें। आपकी फार्मलैंड की विवरणिका प्रदान करें, जिसमें सबसे पहले उपलब्धता, आपकी ज़मीन के चारों ओर मौजूद अन्य सुविधाएँ शामिल हैं। अपने क्षेत्र को एकड़ में प्रदान करें। आपकी ज़मीन पर मौजूद नाल, ट्यूबवेल, ड्रिप इरिगेशन आदि जैसी सिंचाई पैरामीटर्स जोड़ें। अपनी ज़मीन की छवियाँ, कानूनी दस्तावेज़ (जो सरकारी वेबसाइटों पर सार्वजनिक रूप से उपलब्ध हैं) और मानचित्र पर अपनी ज़मीन की सीमा का चयन करें। अपलोड करने के लिए समाप्त पर क्लिक करें।"
        },
        {
          "question": "फार्मलैंड कनेक्ट पर मानचित्र सुविधा क्या है और इसे कैसे उपयोग करें?",
          "answer": "पहले पृष्ठ के फ़ॉर्म को भरते समय पते की फ़ील्ड में अपनी फ़ार्मलैंड की स्थिति डालें। दूसरे पृष्ठ पर, मानचित्र स्वचालित रूप से उस पते की ओर निर्देशित होता है। आवश्यक होने पर मानचित्र को ज़ूम इन / आउट करें ताकि आप नक्शे पर अपनी ज़मीन को खोज सकें। अपनी ज़मीन के मानचित्र पर चारों कोनों पर क्लिक करें। यह आपकी ज़मीन के स्थान के 4 निर्देशांकों का चयन करता है और एक सीमा / मर्ज का आकार खींचता है। इससे फार्मलैंड दर्शक / संभावित खरीदार को आसानी से आपकी ज़मीन को नक्शे पर स्थानांतरित करने में मदद मिलती है।"
        },
        {
          "question": "फार्मलैंड कनेक्ट पर फार्मलैंड लिस्टिंग पोस्ट करते समय मैंने कौन कौन से विभिन्न दस्तावेज़ अपलोड करने हैं?",
          "answer": "फार्मलैंड लिस्टर के दस्तावेज़ - 7/12, 8A (भूमि रिकॉर्ड), लैंडमैप, कोई भी शीर्षक दस्तावेज़ (बिक्री पत्र, उपहार पत्र, कानूनी वारिस, इच्छा), शीर्षक साफ़ घोषणा (शीर्षक खोज के बाद), अन्य दस्तावेज़ (मृदा गुणवत्ता रिपोर्ट, पानी गुणवत्ता रिपोर्ट)। ये सार्वजनिक रूप से उपलब्ध दस्तावेज़ हैं और सरकारी खुले वेबसाइटों और प्लेटफ़ॉर्मों पर डाउनलोड किए जा सकते हैं। उनकी प्रामाणिकता वहाँ से जांची जा सकती है।"
        },
        {
          "question": "लीगलएड चैटबॉट क्या है?",
          "answer": "लीगलएड एक जनरेटिव एआई सहायक चैटबॉट है जो फार्मलैंड खरीदने की प्रक्रिया के बारे में आपके सभी कानूनी प्रश्नों में सहायक है। शीर्षक खोज, 7/12 दस्तावेज़, शीर्षक दस्तावेज़, पॉवर ऑफ़ अटॉर्नी, ज़मीन खरीदने की प्रक्रिया, मूल्य और स्थान को ध्यान में रखने के कारक, बिक्री पत्र की सामग्री और अधिक पर अपने संदेह पूछें।"
        },
        {
          "question": "फार्मलैंड कनेक्ट द्वारा प्रस्तावित विभिन्न बी2बी सेवाएं क्या हैं?",
          "answer": "हमारी वकील सेवाओं का चयन करें जिसमें सम्पूर्ण शीर्षक खोज, भौतिक ज़मीन के स्वामित्व की पुष्टि, और मिट्टी और जल गुणवत्ता परीक्षण एजेंसियों के साथ संगठित तरीके से एकत्रित होने की सुनिश्चिति की जाती है। हमारे विशेषज्ञ कृषि विज्ञानियों के साथ जुड़ें और अपने चयनित जमीन के बारे में अंदरूनी दर्शनों को खोलें। हमारी व्यापक सेवा सुइट के साथ अपने निर्णयों को ऊपरी स्तर पर ले जाएं।"
        }      
    ]);

    const [faqs_gujarati, setFaqs_gujarati] = useState([
      {
        "question": "ફાર્મલેન્ડ કનેક્ટ પ્લેટફોર્મ કેટલી સમસ્યાઓ ને સુધારે છે?",
        "answer": "ફાર્મલેન્ડ કનેક્ટ ખરીદદારો અને મેજરો માટે જમીનના લેન-દેનને સરળ બનાવે છે, સાથે જ જમીનના માલિકો માટે પણ સમસ્યાઓને સુધારે છે। તે વિવિધ લિસ્ટિંગ્સ પ્રદાન કરે છે, બ્રોકરેજ ફીસ ને ઘટાડે છે, અને પક્ષો વચ્ચે વિશ્વાસની માંગ કરે છે। જમીનના માલિકો માટે કિરાયદારો / ખરીદીદારોને આસાની સાથે શોધી શકતા છે, લિસ્ટિંગ્સને દૂરથી પ્રબંધિત કરી શકતા છે, અને મૂલ્ય અને કાનૂની વિષયો પર માર્ગદર્શન મેળવી શકતા છે।"
      },
      {
        "question": "ફાર્મલેન્ડ લિસ્ટિંગ કેવી રીતે અપલોડ કરવી?",
        "answer": "ઉપરાંતે ટોપ હેડર માંથી ફાર્મલેન્ડ ઉમેરો પર જાવો. ફોર્મ વિગતો ભરો. મૂળભૂત વિગતો શામેલ છે - તમારી ફાર્મલેન્ડની લિસ્ટિંગ માટે શીર્ષક, ફાર્મલેન્ડનું માલિકીનું નામ, યદિ સંયુક્ત માલિકીનું માલિક છે તો માલિકોની સંખ્યા। તમારી જમીનનું ખતા નંબર અને સર્વેનંબર દાખલ કરો. આ વિગતો સરકારી સાઇટોમાં મૌજૂદ છે અને તમારા કાનૂની દસ્તાવેજો માં છે। તમારી ફાર્મલેન્ડની વર્તનીની વર્ણન પ્રદાન કરો, જેમાં સૌથી પહેલે ઉપલબ્ધતા, તમારી જમીન અને તેની આસપાસની અન્ય વિશેષતાઓ શામેલ છે। એકરમાં પ્રદાન કરો. તમારી જમીનની કિંમત પ્રદાન કરો. તમારી જમીન પર વિવિધ ફસલો લાગુ કરવા માટે નિયંત્રણ પેરામીટર્સ ઉમેરો, જેમાં નહર, ટ્યુબવેલ, ડ્રિપ સિંચાઈ અને અન્ય સાથે ઉમેરો છે. તમારી જમીનની છવિઓ, કાનૂની દસ્તાવેજ (જે સરકારી વેબસાઇટ્સ પર સાર્વજનિક રીતે ઉપલબ્ધ છે) અને માનચિત્ર પર તમારી જમીનની સીમાની પસંદગી કરો। અપલોડ કરવા માટે ફિનિશ પર ક્લિક કરો।"
      },
      {
        "question": "ફાર્મલેન્ડ કનેક્ટ પર માનચિત્ર ફિચર શું છે અને તેનો ઉપયોગ કેવી રીતે કરવો?",
        "answer": "ફાર્મલેન્ડ ઉમેરવા પર પહેલાંની પૃષ્ઠના ફોર્મમાં તમારા ફાર્મલેન્ડનું સ્થળ નામ દાખલ કરો. બીજા પૃષ્ઠ પર, માનચિત્ર સ્વચાલિત રીતે તે સ્થળ માટે માર્ગદર્શિત થયેલ છે। માનચિત્ર પર તમે તમારી જમીન શોધવા માટે જ઼ૂમ ઇન / આઉટ કરી શકો છો। તમારી જમીનના માનચિત્ર પર ચારો કોના પર ક્લિક કરો। આ તમારી જમીનના સ્થાનના 4 નિર્દેશાંકોનું ચયન કરે છે અને એક કૉન્ટોર / બાઉન્ડરી ખેંચે છે। આ ફાર્મલેન્ડ વ્યૂઅર / સંભાવિત ખરીદીદારને તમારી જમીન ને માનચિત્ર પર સ્થાનાંતરણ કરવામાં સહાય કરે છે।"
      },
      {
        "question": "ફાર્મલેન્ડ કનેક્ટ પર ફાર્મલેન્ડ લિસ્ટિંગ પોસ્ટ કરતા સમય મેં કયા વિવિધ દસ્તાવેજો અપલોડ કરવા જોઈએ?",
        "answer": "ફાર્મલેન્ડ લિસ્ટરના દસ્તાવેજો - 7/12, 8A (જમીનનું રેકોર્ડ), લેન્ડમેપ, કોઈ પણ માન્યતા દસ્તાવેજ (વેચાણની ડીડ, ગિફ્ટ ડીડ, કાનૂની વારસ, વિલ), માન્યતા સ્પષ્ટ ઘોષણા (માન્યતા શોધ પછી), અન્ય દસ્તાવેજ (મટીની ગુણવત્તા રિપોર્ટ, પાણીની ગુણવત્તા રિપોર્ટ)। આ સાર્વજનિક ઉપલબ્ધ દસ્તાવેજો છે અને સરકારી ખુલ્લી વેબસાઇટ્સ અને પ્લેટફોર્મ્સ પર ડાઉનલોડ કરવા માટે ઉપલબ્ધ છે। તેની પ્રામાણિકતા તેથી ચેક કરી શકાય છે।"
      },
      {
        "question": "લીગલએડ ચેટબોટ શું છે?",
        "answer": "લીગલએડ ફાર્મલેન્ડ ખરીદવાની પ્રક્રિયા વિશે તમારી તમામ કાનૂની પ્રશ્નોમાં સહાયક જનરેટિવ એઆઈ સહાયક ચેટબોટ છે। મુદ્દા ખોજ, 7/12 દસ્તાવેજ, શીર્ષક દસ્તાવેજ, પાવર ઓફ અટોર્ની, જમીન ખરીદવાની પ્રક્રિયા, મૂલ્ય અને સ્થાનના ફેક્ટર્સ, વેચાણ ડીડની સામગ્રી અને વધુ વિશે તમારા સંદેહો પૂછો."
      },
      {
        "question": "ફાર્મલેન્ડ કનેક્ટ દ્વારા પ્રસ્તાવિત વિવિધ B2B સેવાઓ શું છે?",
        "answer": "તમારી પૂરી શીર્ષક શોધ માટે અમલમાં લેવા માટે, ભૌતિક જમીન સ્વામિત્વની ચકાસણી પૂરી કરવા માટે, અને મિટ્ટી અને પાણીનું ગુણવત્તા ટેસ્ટિંગ એજન્સીસ સાથે સેમલેસ ઇન્ટિગ્રેશન ની ખુશબૂ મેળવો। અમારા વિશેષજ્ઞ ખેતીશાસ્ત્રજોને સાથે જોડાઓ અને તમારા પસંદગી જમીન વિશેના આંતરિક અંદાજો અનલોક કરો। અમારા વિસ્તૃત સેવા સૂટને સાથે તમારા નિર્ણયોને વધુમાં ઊપરી માળો."
      }
    ]);

    const [faqs_marathi, setFaqs_marathi] = useState([
      {
        "question": "या फार्मलँड कनेक्ट प्लॅटफॉर्मने कोणत्या समस्यांचे समाधान करते?",
        "answer": "फार्मलँड कनेक्ट खरेदीदार आणि किरायादारांसाठी जमिनींच्या संवादांचे सुंदर करते, साथ ही जमिनींच्या मालकांसाठीही समस्यांचे सुंदर करते. त्यांना विविध लिस्टिंग्स प्रदान करते, दलालीची फीस कमी करते, आणि पक्षांमध्ये विश्वास सुनिश्चित करते. जमिनींच्या मालकांना किरायादार/खरेदीदारे सोप्पणे शोधणे, लिस्टिंग्स रिमोटला प्रबंधित करणे, आणि किर्या आणि कायदेशीर मांडण्यांवर मार्गदर्शन मिळवणे आधीसाठी योग्य करते."
      },
      {
        "question": "फार्मलँड लिस्टिंग कसे अपलोड करायचे?",
        "answer": "वरील शिर्षक पानावरून Add FarmLand वर जाऊन फॉर्म तपासा. मूलभूत माहिती समाविष्ट करा - तुमच्या फार्मलँडच्या नावाचे लिस्टिंगचे शीर्षक, तुमच्या फार्मलँडच्या मालकाचे नाव, जोडीदार मालकाचे असल्यास संख्या नाही तर संख्या नाही. तुमच्या जमिनीचा खता नंबर आणि सर्वे नंबर द्या. ही माहिती सरकारच्या साइट्सवर उपलब्ध आहे आणि तुमचे कायदेशीर कागदपत्र आहेत. पत्ता पॅरामीटर्स जोडा. तुमच्या फार्मलँडच्या विशेषता समाविष्ट करा जिथे सर्वात जलद उपलब्धता, तुमच्या जमिनपर्यंत अन्य सुविधा असतात. एकर मिळवा. तुमची जमिनची किंमत द्या. तुमच्या जमिनवर अनेक शेती लागू करण्याची शक्यता द्या. नाली, ट्यूबवेल, ड्रिप सिंचन इत्यादी तुमच्या जमिनवर उपलब्ध निर्माण करा. तुमच्या जमिनची छवी, कायदेशीर कागदपत्र (ज्यांची सार्वजनिकपणे सरकारच्या वेबसाइट्सवर उपलब्ध आहेत) अपलोड करा आणि तुमच्या जमिनच्या सीमा निवडा जमिनवरून म्हटले। समाप्त करण्यासाठी पुर्ण क्लिक करा."
      },
      {
        "question": "फार्मलँड कनेक्टवर मॅप फीचर कसा आहे आणि त्याचा उपयोग कसा करायचा?",
        "answer": "आपल्या फार्मलँडचा ठिकाण फॉर्मच्या पहिल्या पानावर द्या. दुसऱ्या पानावर, मॅप स्वयंप्रकारात त्या पत्त्यांकरिता नेला जातो. जर आवश्यक असेल तर मॅपमध्ये आकर्षित / बाहेर जा. तुमची जमिन मॅपवर शोधण्यासाठी आकर्षित किंवा बाहेर जा. मॅपवर आपली जमिन निवडून क्लिक करा. चार कोनांच्या यात्रेत क्लिक करा. आपली जमिनच्या स्थानाचे 4 निर्देशांक निवडले जातात आणि कंटोर / सीमा खिचवला जातो. ह्यामध्ये फार्मलँड दर्शक / संभाव्य खरेदीदार आपल्या जमिनाचे स्थान आसाण्यास मदत करते."
      },
      {
        "question": "फार्मलँड कनेक्टवर्गी फार्मलँड लिस्टिंग पोस्ट करताना किती विविध कागदपत्रे अपलोड करावी?",
        "answer": "फार्मलँड लिस्टरवारील कागदपत्रे - 7/12, 8A (जमिनचे रेकॉर्ड), लॅंडमॅप, कोणतेही मान्यता दस्तऐवज (विक्रीनामा, गिफ्ट डेड, कायदेशीर वारस, विल), मान्यता स्पष्ट घोषणा (मान्यता शोधनानंतर), इतर दस्तऐवज (माटीची गुणवत्ता अहवाल, पाण्याची गुणवत्ता अहवाल). या सार्वजनिकपणे उपलब्ध असलेल्या कागदपत्रांची सामग्री आणि सरकारच्या खुल्ल्या वेबसाइट्सवर डाउनलोड करण्यासाठी उपलब्ध आहे. त्यांची प्रामाणिकता त्यांच्याकडून तपासू शकता."
      },
      {
        "question": "लेगलएड चॅटबॉट काय आहे?",
        "answer": "लेगलएड हा फार्मलँड खरेदीसाठी आपल्या सर्व कायदेशीर प्रश्नांमध्ये सहायक जनरेटिव्ह एआय असिस्टंट चॅटबॉट आहे. शीर्षक शोधा, 7/12 दस्तऐवज, शीर्षक दस्तऐवज, पावर ऑफ अटॉर्नी, जमीन खरेदीसाठी प्रक्रिया, किंमत आणि स्थान संबंधित कारकांची माहिती, विक्रीनामा आणि अधिक."
      },
      {
        "question": "फार्मलँड कनेक्टवर प्रस्तावित विविध B2B सेवांची माहिती कोणती आहे?",
        "answer": "आपल्या पसंतीच्या फार्मलँड साठी संपूर्ण शीर्षक शोधण्यासाठी, भौतिक जमीनीची तपासणी सुनिश्चित करण्यासाठी, आणि माटी आणि पाण्याच्या गुणवत्ता चाचणी कार्यक्षमता सुरू करण्यासाठी, आमच्या वकील सेवा निवडा. आपल्या निवडलेल्या जमिनविषयक तज्ञांसह जोडा आणि आपल्या निवडलेल्या जमिनविषयक सामग्रीवर माहिती मिळवा. आपल्या निर्णयांच्या विचारासह आमच्या संपूर्ण सेवेचे उत्कृष्ट बनवा."
      }
    ]);

  return (
    <div className="faq-container">
      <h1 className="this_h1">FAQ - English</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>

      <h1 className="this_h1">FAQ - Hindi</h1>
      <ul className="faq-list">
        {faqs_hindi.map((faq, index) => (
          <li key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>

      <h1 className="this_h1">FAQ - Gujarati</h1>
      <ul className="faq-list">
        {faqs_gujarati.map((faq, index) => (
          <li key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>

      <h1 className="this_h1">FAQ - Marathi</h1>
      <ul className="faq-list">
        {faqs_marathi.map((faq, index) => (
          <li key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatbot;