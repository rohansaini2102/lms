import { ExamData } from '../../types';

export const REET_EXAM: ExamData = {
  id: 'reet',
  name: 'REET',
  fullName: 'Rajasthan Eligibility Examination for Teachers',
  fullNameHi: 'राजस्थान अध्यापक पात्रता परीक्षा',
  category: 'teaching',
  icon: 'GraduationCap',
  color: '#F59E0B',
  description: 'Teacher eligibility exam for Rajasthan schools',
  descriptionHi: 'राजस्थान के स्कूलों के लिए शिक्षक पात्रता परीक्षा',
  subjects: [
    {
      id: 'cdp',
      name: 'Child Development & Pedagogy',
      nameHi: 'बाल विकास एवं शिक्षाशास्त्र',
      icon: 'Baby',
      color: '#7C3AED',
      topics: [
        {
          id: 'child-development',
          name: 'Child Development',
          nameHi: 'बाल विकास',
          chapters: [
            {
              id: 'growth-development',
              name: 'Growth and Development',
              nameHi: 'वृद्धि एवं विकास',
              difficulty: 'easy',
              questions: [
                {
                  id: 'cdp-1',
                  text: 'Development is a process that continues from',
                  textHi: 'विकास एक प्रक्रिया है जो जारी रहती है',
                  options: ['Birth to childhood', 'Childhood to adolescence', 'Womb to tomb', 'Birth to old age'],
                  optionsHi: ['जन्म से बचपन', 'बचपन से किशोरावस्था', 'गर्भ से कब्र तक', 'जन्म से वृद्धावस्था'],
                  correctAnswer: 2,
                  explanation: 'Development is a lifelong process that begins from conception (womb) and continues until death (tomb). This is known as the "womb to tomb" concept.',
                  explanationHi: 'विकास एक आजीवन प्रक्रिया है जो गर्भाधान (गर्भ) से शुरू होती है और मृत्यु (कब्र) तक जारी रहती है। इसे "गर्भ से कब्र" की अवधारणा के रूप में जाना जाता है।',
                  difficulty: 'easy',
                  year: 'REET 2021'
                },
                {
                  id: 'cdp-2',
                  text: 'Who gave the theory of "Cognitive Development"?',
                  textHi: '"संज्ञानात्मक विकास" का सिद्धांत किसने दिया?',
                  options: ['Sigmund Freud', 'Jean Piaget', 'B.F. Skinner', 'John Watson'],
                  optionsHi: ['सिगमंड फ्रायड', 'जीन पियाजे', 'बी.एफ. स्किनर', 'जॉन वाटसन'],
                  correctAnswer: 1,
                  explanation: 'Jean Piaget (1896-1980) gave the theory of Cognitive Development which describes four stages: Sensorimotor, Pre-operational, Concrete operational, and Formal operational.',
                  explanationHi: 'जीन पियाजे (1896-1980) ने संज्ञानात्मक विकास का सिद्धांत दिया जो चार चरणों का वर्णन करता है: संवेदी-गामक, पूर्व-संक्रियात्मक, मूर्त संक्रियात्मक और औपचारिक संक्रियात्मक।',
                  difficulty: 'easy',
                  year: 'REET 2018'
                },
                {
                  id: 'cdp-3',
                  text: 'According to Piaget, at what age does a child enter the "Formal Operational Stage"?',
                  textHi: 'पियाजे के अनुसार, बच्चा किस उम्र में "औपचारिक संक्रियात्मक अवस्था" में प्रवेश करता है?',
                  options: ['0-2 years', '2-7 years', '7-11 years', '11 years and above'],
                  optionsHi: ['0-2 वर्ष', '2-7 वर्ष', '7-11 वर्ष', '11 वर्ष और उससे अधिक'],
                  correctAnswer: 3,
                  explanation: 'According to Piaget, the Formal Operational Stage begins at age 11 and continues through adulthood. In this stage, children develop abstract thinking and logical reasoning abilities.',
                  explanationHi: 'पियाजे के अनुसार, औपचारिक संक्रियात्मक अवस्था 11 वर्ष की आयु में शुरू होती है और वयस्कता तक जारी रहती है। इस अवस्था में, बच्चे अमूर्त सोच और तार्किक तर्क क्षमताएं विकसित करते हैं।',
                  difficulty: 'medium',
                  year: 'REET 2021'
                },
                {
                  id: 'cdp-4',
                  text: 'Who is known as the father of "Psychoanalysis"?',
                  textHi: '"मनोविश्लेषण" के जनक के रूप में किसे जाना जाता है?',
                  options: ['Jean Piaget', 'Sigmund Freud', 'Carl Jung', 'Alfred Adler'],
                  optionsHi: ['जीन पियाजे', 'सिगमंड फ्रायड', 'कार्ल युंग', 'अल्फ्रेड एडलर'],
                  correctAnswer: 1,
                  explanation: 'Sigmund Freud (1856-1939) is known as the father of Psychoanalysis. He developed theories about the unconscious mind, personality development (Id, Ego, Superego), and psychosexual stages.',
                  explanationHi: 'सिगमंड फ्रायड (1856-1939) को मनोविश्लेषण का जनक माना जाता है। उन्होंने अचेतन मन, व्यक्तित्व विकास (इड, अहं, परा-अहं) और मनोलैंगिक अवस्थाओं के सिद्धांत विकसित किए।',
                  difficulty: 'easy'
                },
                {
                  id: 'cdp-5',
                  text: 'Vygotsky\'s theory is also known as:',
                  textHi: 'वायगोत्स्की का सिद्धांत किस नाम से भी जाना जाता है:',
                  options: ['Behavioral Theory', 'Socio-Cultural Theory', 'Cognitive Theory', 'Psychoanalytic Theory'],
                  optionsHi: ['व्यवहारवादी सिद्धांत', 'सामाजिक-सांस्कृतिक सिद्धांत', 'संज्ञानात्मक सिद्धांत', 'मनोविश्लेषणात्मक सिद्धांत'],
                  correctAnswer: 1,
                  explanation: 'Lev Vygotsky\'s theory is known as the Socio-Cultural Theory. He emphasized the role of social interaction and culture in cognitive development, and introduced concepts like ZPD (Zone of Proximal Development).',
                  explanationHi: 'लेव वायगोत्स्की का सिद्धांत सामाजिक-सांस्कृतिक सिद्धांत के रूप में जाना जाता है। उन्होंने संज्ञानात्मक विकास में सामाजिक संपर्क और संस्कृति की भूमिका पर जोर दिया और ZPD (समीपस्थ विकास का क्षेत्र) जैसी अवधारणाएं पेश कीं।',
                  difficulty: 'medium',
                  year: 'REET 2018'
                },
                {
                  id: 'cdp-6',
                  text: 'The concept of "Zone of Proximal Development" was given by:',
                  textHi: '"समीपस्थ विकास का क्षेत्र" की अवधारणा किसने दी:',
                  options: ['Piaget', 'Vygotsky', 'Bruner', 'Kohlberg'],
                  optionsHi: ['पियाजे', 'वायगोत्स्की', 'ब्रूनर', 'कोहलबर्ग'],
                  correctAnswer: 1,
                  explanation: 'Lev Vygotsky introduced the concept of Zone of Proximal Development (ZPD). It refers to the difference between what a learner can do independently and what they can achieve with guidance.',
                  explanationHi: 'लेव वायगोत्स्की ने समीपस्थ विकास के क्षेत्र (ZPD) की अवधारणा पेश की। यह उस अंतर को संदर्भित करता है जो एक शिक्षार्थी स्वतंत्र रूप से कर सकता है और जो वे मार्गदर्शन के साथ प्राप्त कर सकते हैं।',
                  difficulty: 'easy',
                  year: 'REET 2021'
                },
                {
                  id: 'cdp-7',
                  text: 'Which of the following is NOT a stage of Kohlberg\'s moral development?',
                  textHi: 'निम्नलिखित में से कौन कोहलबर्ग के नैतिक विकास की अवस्था नहीं है?',
                  options: ['Pre-conventional', 'Conventional', 'Post-conventional', 'Ultra-conventional'],
                  optionsHi: ['पूर्व-परंपरागत', 'परंपरागत', 'पश्च-परंपरागत', 'अति-परंपरागत'],
                  correctAnswer: 3,
                  explanation: 'Kohlberg\'s theory has three levels: Pre-conventional (punishment/reward), Conventional (social rules), and Post-conventional (universal principles). "Ultra-conventional" is not a stage.',
                  explanationHi: 'कोहलबर्ग के सिद्धांत में तीन स्तर हैं: पूर्व-परंपरागत (दंड/पुरस्कार), परंपरागत (सामाजिक नियम), और पश्च-परंपरागत (सार्वभौमिक सिद्धांत)। "अति-परंपरागत" कोई अवस्था नहीं है।',
                  difficulty: 'medium'
                },
                {
                  id: 'cdp-8',
                  text: 'The term "Scaffolding" in education was coined by:',
                  textHi: 'शिक्षा में "स्कैफोल्डिंग" शब्द किसने गढ़ा:',
                  options: ['Piaget', 'Bruner', 'Vygotsky', 'Skinner'],
                  optionsHi: ['पियाजे', 'ब्रूनर', 'वायगोत्स्की', 'स्किनर'],
                  correctAnswer: 1,
                  explanation: 'Jerome Bruner coined the term "Scaffolding" based on Vygotsky\'s ZPD concept. It refers to the temporary support provided by a teacher to help students accomplish tasks.',
                  explanationHi: 'जेरोम ब्रूनर ने वायगोत्स्की की ZPD अवधारणा के आधार पर "स्कैफोल्डिंग" शब्द गढ़ा। यह छात्रों को कार्यों को पूरा करने में मदद करने के लिए शिक्षक द्वारा प्रदान किए गए अस्थायी समर्थन को संदर्भित करता है।',
                  difficulty: 'hard',
                  year: 'REET 2018'
                },
                {
                  id: 'cdp-9',
                  text: 'Which principle states that development proceeds from head to toe?',
                  textHi: 'कौन सा सिद्धांत बताता है कि विकास सिर से पैर तक होता है?',
                  options: ['Proximodistal', 'Cephalocaudal', 'General to Specific', 'Simple to Complex'],
                  optionsHi: ['समीप-दूर', 'शिरःपुच्छ', 'सामान्य से विशिष्ट', 'सरल से जटिल'],
                  correctAnswer: 1,
                  explanation: 'The Cephalocaudal principle states that development proceeds from head (cephalo) to tail/toe (caudal). Babies first gain control of their head, then trunk, then legs.',
                  explanationHi: 'शिरःपुच्छ सिद्धांत बताता है कि विकास सिर (सेफेलो) से पूंछ/पैर (कॉडल) तक होता है। शिशु पहले अपने सिर पर नियंत्रण प्राप्त करते हैं, फिर धड़, फिर पैर।',
                  difficulty: 'medium'
                },
                {
                  id: 'cdp-10',
                  text: 'Heredity is also known as:',
                  textHi: 'आनुवंशिकता को इस नाम से भी जाना जाता है:',
                  options: ['Environment', 'Nature', 'Nurture', 'Learning'],
                  optionsHi: ['पर्यावरण', 'प्रकृति', 'पालन-पोषण', 'अधिगम'],
                  correctAnswer: 1,
                  explanation: 'In the "Nature vs Nurture" debate, Nature refers to heredity (genetic factors), while Nurture refers to environment (upbringing, experiences).',
                  explanationHi: '"प्रकृति बनाम पालन-पोषण" बहस में, प्रकृति आनुवंशिकता (आनुवंशिक कारकों) को संदर्भित करती है, जबकि पालन-पोषण पर्यावरण (परवरिश, अनुभव) को संदर्भित करता है।',
                  difficulty: 'easy'
                }
              ]
            },
            {
              id: 'learning-theories',
              name: 'Learning Theories',
              nameHi: 'अधिगम के सिद्धांत',
              difficulty: 'medium',
              questions: [
                {
                  id: 'lt-1',
                  text: 'Who conducted the experiment on "Classical Conditioning" with dogs?',
                  textHi: 'कुत्तों के साथ "शास्त्रीय अनुबंधन" पर प्रयोग किसने किया?',
                  options: ['B.F. Skinner', 'Ivan Pavlov', 'John Watson', 'E.L. Thorndike'],
                  optionsHi: ['बी.एफ. स्किनर', 'इवान पावलोव', 'जॉन वाटसन', 'ई.एल. थॉर्नडाइक'],
                  correctAnswer: 1,
                  explanation: 'Ivan Pavlov (1849-1936) conducted the classical conditioning experiment with dogs, demonstrating how a neutral stimulus (bell) can trigger a response (salivation) when paired with an unconditioned stimulus (food).',
                  explanationHi: 'इवान पावलोव (1849-1936) ने कुत्तों के साथ शास्त्रीय अनुबंधन प्रयोग किया, यह प्रदर्शित करते हुए कि कैसे एक तटस्थ उद्दीपक (घंटी) एक अप्रतिबंधित उद्दीपक (भोजन) के साथ जोड़े जाने पर प्रतिक्रिया (लार) को ट्रिगर कर सकता है।',
                  difficulty: 'easy',
                  year: 'REET 2021'
                },
                {
                  id: 'lt-2',
                  text: 'The "Law of Effect" was given by:',
                  textHi: '"प्रभाव का नियम" किसने दिया:',
                  options: ['Pavlov', 'Skinner', 'Thorndike', 'Bruner'],
                  optionsHi: ['पावलोव', 'स्किनर', 'थॉर्नडाइक', 'ब्रूनर'],
                  correctAnswer: 2,
                  explanation: 'E.L. Thorndike proposed the Law of Effect as part of his theory of Connectionism. It states that responses followed by satisfying consequences are strengthened.',
                  explanationHi: 'ई.एल. थॉर्नडाइक ने अपने संयोजनवाद के सिद्धांत के भाग के रूप में प्रभाव का नियम प्रस्तावित किया। इसमें कहा गया है कि संतोषजनक परिणामों के बाद आने वाली प्रतिक्रियाएं मजबूत होती हैं।',
                  difficulty: 'easy',
                  year: 'REET 2018'
                },
                {
                  id: 'lt-3',
                  text: 'Operant Conditioning theory was propounded by:',
                  textHi: 'क्रिया-प्रसूत अनुबंधन सिद्धांत किसने प्रतिपादित किया:',
                  options: ['Pavlov', 'B.F. Skinner', 'Kohler', 'Thorndike'],
                  optionsHi: ['पावलोव', 'बी.एफ. स्किनर', 'कोहलर', 'थॉर्नडाइक'],
                  correctAnswer: 1,
                  explanation: 'B.F. Skinner developed the Operant Conditioning theory, also called Instrumental Conditioning. He used the "Skinner Box" to study how reinforcement affects behavior.',
                  explanationHi: 'बी.एफ. स्किनर ने क्रिया-प्रसूत अनुबंधन सिद्धांत विकसित किया, जिसे यंत्रवत अनुबंधन भी कहा जाता है। उन्होंने यह अध्ययन करने के लिए "स्किनर बॉक्स" का उपयोग किया कि पुनर्बलन व्यवहार को कैसे प्रभावित करता है।',
                  difficulty: 'easy'
                },
                {
                  id: 'lt-4',
                  text: 'Who gave the "Insight Learning" theory?',
                  textHi: '"अंतर्दृष्टि अधिगम" का सिद्धांत किसने दिया?',
                  options: ['Thorndike', 'Pavlov', 'Wolfgang Kohler', 'Skinner'],
                  optionsHi: ['थॉर्नडाइक', 'पावलोव', 'वोल्फगैंग कोहलर', 'स्किनर'],
                  correctAnswer: 2,
                  explanation: 'Wolfgang Kohler proposed the Insight Learning theory based on his experiments with chimpanzees. He demonstrated that learning can occur through sudden realization rather than trial and error.',
                  explanationHi: 'वोल्फगैंग कोहलर ने चिंपांज़ी पर अपने प्रयोगों के आधार पर अंतर्दृष्टि अधिगम सिद्धांत प्रस्तावित किया। उन्होंने प्रदर्शित किया कि सीखना प्रयास और त्रुटि के बजाय अचानक बोध के माध्यम से हो सकता है।',
                  difficulty: 'medium',
                  year: 'REET 2021'
                },
                {
                  id: 'lt-5',
                  text: 'The concept of "Learning by Doing" was emphasized by:',
                  textHi: '"करके सीखना" की अवधारणा पर किसने जोर दिया:',
                  options: ['John Dewey', 'Piaget', 'Vygotsky', 'Freud'],
                  optionsHi: ['जॉन डीवी', 'पियाजे', 'वायगोत्स्की', 'फ्रायड'],
                  correctAnswer: 0,
                  explanation: 'John Dewey, the father of Progressive Education, emphasized "Learning by Doing" or experiential learning. He believed education should be based on real-life experiences.',
                  explanationHi: 'प्रगतिशील शिक्षा के जनक जॉन डीवी ने "करके सीखना" या अनुभवात्मक अधिगम पर जोर दिया। उनका मानना था कि शिक्षा वास्तविक जीवन के अनुभवों पर आधारित होनी चाहिए।',
                  difficulty: 'easy'
                },
                {
                  id: 'lt-6',
                  text: 'Bandura\'s Social Learning Theory is also known as:',
                  textHi: 'बंडूरा का सामाजिक अधिगम सिद्धांत किस नाम से भी जाना जाता है:',
                  options: ['Classical Conditioning', 'Observational Learning', 'Insight Learning', 'Trial and Error'],
                  optionsHi: ['शास्त्रीय अनुबंधन', 'प्रेक्षणात्मक अधिगम', 'अंतर्दृष्टि अधिगम', 'प्रयास और त्रुटि'],
                  correctAnswer: 1,
                  explanation: 'Albert Bandura\'s Social Learning Theory is also called Observational Learning. His famous "Bobo Doll experiment" showed that children learn behaviors by observing others.',
                  explanationHi: 'अल्बर्ट बंडूरा का सामाजिक अधिगम सिद्धांत प्रेक्षणात्मक अधिगम भी कहलाता है। उनके प्रसिद्ध "बोबो डॉल प्रयोग" से पता चला कि बच्चे दूसरों को देखकर व्यवहार सीखते हैं।',
                  difficulty: 'medium',
                  year: 'REET 2018'
                },
                {
                  id: 'lt-7',
                  text: 'Which type of reinforcement involves removing an unpleasant stimulus?',
                  textHi: 'किस प्रकार के पुनर्बलन में एक अप्रिय उद्दीपक को हटाना शामिल है?',
                  options: ['Positive Reinforcement', 'Negative Reinforcement', 'Positive Punishment', 'Negative Punishment'],
                  optionsHi: ['सकारात्मक पुनर्बलन', 'नकारात्मक पुनर्बलन', 'सकारात्मक दंड', 'नकारात्मक दंड'],
                  correctAnswer: 1,
                  explanation: 'Negative Reinforcement strengthens a behavior by removing an unpleasant stimulus. For example, fastening a seatbelt to stop the annoying beep in a car.',
                  explanationHi: 'नकारात्मक पुनर्बलन एक अप्रिय उद्दीपक को हटाकर व्यवहार को मजबूत करता है। उदाहरण के लिए, कार में परेशान करने वाली बीप को रोकने के लिए सीटबेल्ट बांधना।',
                  difficulty: 'hard'
                },
                {
                  id: 'lt-8',
                  text: 'Trial and Error learning is associated with:',
                  textHi: 'प्रयास और त्रुटि अधिगम किससे संबंधित है:',
                  options: ['Pavlov', 'Thorndike', 'Kohler', 'Skinner'],
                  optionsHi: ['पावलोव', 'थॉर्नडाइक', 'कोहलर', 'स्किनर'],
                  correctAnswer: 1,
                  explanation: 'E.L. Thorndike\'s experiments with cats in puzzle boxes demonstrated Trial and Error learning. The cats gradually learned to escape by trying different actions and learning from mistakes.',
                  explanationHi: 'पहेली बक्सों में बिल्लियों के साथ ई.एल. थॉर्नडाइक के प्रयोगों ने प्रयास और त्रुटि अधिगम का प्रदर्शन किया। बिल्लियों ने धीरे-धीरे विभिन्न क्रियाओं को आज़माकर और गलतियों से सीखकर बाहर निकलना सीखा।',
                  difficulty: 'easy'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      nameHi: 'गणित',
      icon: 'Calculator',
      color: '#DC2626',
      topics: [
        {
          id: 'number-system',
          name: 'Number System',
          nameHi: 'संख्या पद्धति',
          chapters: [
            {
              id: 'natural-numbers',
              name: 'Natural & Whole Numbers',
              nameHi: 'प्राकृतिक एवं पूर्ण संख्याएं',
              difficulty: 'easy',
              questions: [
                {
                  id: 'math-1',
                  text: 'The smallest natural number is:',
                  textHi: 'सबसे छोटी प्राकृतिक संख्या है:',
                  options: ['0', '1', '-1', '2'],
                  optionsHi: ['0', '1', '-1', '2'],
                  correctAnswer: 1,
                  explanation: 'Natural numbers start from 1 and go to infinity (1, 2, 3, 4, ...). Zero is not a natural number, but it is included in whole numbers.',
                  explanationHi: 'प्राकृतिक संख्याएं 1 से शुरू होती हैं और अनंत तक जाती हैं (1, 2, 3, 4, ...)। शून्य प्राकृतिक संख्या नहीं है, लेकिन यह पूर्ण संख्याओं में शामिल है।',
                  difficulty: 'easy'
                },
                {
                  id: 'math-2',
                  text: 'The smallest whole number is:',
                  textHi: 'सबसे छोटी पूर्ण संख्या है:',
                  options: ['0', '1', '-1', 'None'],
                  optionsHi: ['0', '1', '-1', 'कोई नहीं'],
                  correctAnswer: 0,
                  explanation: 'Whole numbers include 0 and all natural numbers (0, 1, 2, 3, ...). Therefore, 0 is the smallest whole number.',
                  explanationHi: 'पूर्ण संख्याओं में 0 और सभी प्राकृतिक संख्याएं शामिल हैं (0, 1, 2, 3, ...)। इसलिए, 0 सबसे छोटी पूर्ण संख्या है।',
                  difficulty: 'easy'
                },
                {
                  id: 'math-3',
                  text: 'What is the LCM of 12 and 18?',
                  textHi: '12 और 18 का LCM क्या है?',
                  options: ['6', '36', '72', '24'],
                  optionsHi: ['6', '36', '72', '24'],
                  correctAnswer: 1,
                  explanation: 'LCM (Least Common Multiple) of 12 and 18: 12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 4 × 9 = 36',
                  explanationHi: '12 और 18 का LCM (लघुत्तम समापवर्त्य): 12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 4 × 9 = 36',
                  difficulty: 'medium',
                  year: 'REET 2021'
                },
                {
                  id: 'math-4',
                  text: 'What is the HCF of 24 and 36?',
                  textHi: '24 और 36 का HCF क्या है?',
                  options: ['4', '6', '12', '72'],
                  optionsHi: ['4', '6', '12', '72'],
                  correctAnswer: 2,
                  explanation: 'HCF (Highest Common Factor) of 24 and 36: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 4 × 3 = 12',
                  explanationHi: '24 और 36 का HCF (महत्तम समापवर्तक): 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 4 × 3 = 12',
                  difficulty: 'medium'
                },
                {
                  id: 'math-5',
                  text: 'A number is divisible by 3 if:',
                  textHi: 'एक संख्या 3 से विभाज्य है यदि:',
                  options: ['Its last digit is 3', 'Sum of its digits is divisible by 3', 'It ends with 0', 'It is even'],
                  optionsHi: ['इसका अंतिम अंक 3 है', 'इसके अंकों का योग 3 से विभाज्य है', 'यह 0 पर समाप्त होती है', 'यह सम है'],
                  correctAnswer: 1,
                  explanation: 'A number is divisible by 3 if the sum of all its digits is divisible by 3. For example, 123 → 1+2+3 = 6, and 6 is divisible by 3.',
                  explanationHi: 'एक संख्या 3 से विभाज्य है यदि उसके सभी अंकों का योग 3 से विभाज्य है। उदाहरण के लिए, 123 → 1+2+3 = 6, और 6, 3 से विभाज्य है।',
                  difficulty: 'easy'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
