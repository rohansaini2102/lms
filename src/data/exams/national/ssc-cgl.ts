import { ExamData } from '../../types';

export const SSC_CGL_EXAM: ExamData = {
  id: 'ssc-cgl',
  name: 'SSC CGL',
  fullName: 'Staff Selection Commission - Combined Graduate Level',
  fullNameHi: 'कर्मचारी चयन आयोग - संयुक्त स्नातक स्तरीय परीक्षा',
  category: 'ssc',
  icon: 'Building2',
  color: '#DC2626',
  subjects: [
    {
      id: 'quantitative-aptitude',
      name: 'Quantitative Aptitude',
      nameHi: 'मात्रात्मक अभियोग्यता',
      icon: 'Calculator',
      color: '#2563EB',
      topics: [
        {
          id: 'arithmetic',
          name: 'Arithmetic',
          nameHi: 'अंकगणित',
          chapters: [
            {
              id: 'percentage',
              name: 'Percentage',
              nameHi: 'प्रतिशत',
              difficulty: 'easy',
              questions: [
                {
                  id: 'ssc-qa-per-001',
                  text: 'If the price of sugar increases by 20%, by what percent should a housewife reduce her consumption so that the expenditure remains the same?',
                  textHi: 'यदि चीनी की कीमत में 20% की वृद्धि हो जाए, तो गृहिणी को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि खर्च समान रहे?',
                  options: ['16.67%', '20%', '25%', '15%'],
                  optionsHi: ['16.67%', '20%', '25%', '15%'],
                  correctAnswer: 0,
                  explanation: 'Reduction = (Increase / (100 + Increase)) × 100 = (20/120) × 100 = 16.67%',
                  explanationHi: 'कमी = (वृद्धि / (100 + वृद्धि)) × 100 = (20/120) × 100 = 16.67%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-per-002',
                  text: 'A number is increased by 10% and then decreased by 10%. The net change is:',
                  textHi: 'एक संख्या को 10% बढ़ाया जाता है और फिर 10% घटाया जाता है। शुद्ध परिवर्तन है:',
                  options: ['1% increase', '1% decrease', 'No change', '0.1% decrease'],
                  optionsHi: ['1% वृद्धि', '1% कमी', 'कोई परिवर्तन नहीं', '0.1% कमी'],
                  correctAnswer: 1,
                  explanation: 'Net change = -a²/100 = -100/100 = -1% (decrease)',
                  explanationHi: 'शुद्ध परिवर्तन = -a²/100 = -100/100 = -1% (कमी)',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-per-003',
                  text: 'If A is 20% more than B, then B is what percent less than A?',
                  textHi: 'यदि A, B से 20% अधिक है, तो B, A से कितने प्रतिशत कम है?',
                  options: ['16.67%', '20%', '25%', '15%'],
                  optionsHi: ['16.67%', '20%', '25%', '15%'],
                  correctAnswer: 0,
                  explanation: 'B is less than A by (20/120) × 100 = 16.67%',
                  explanationHi: 'B, A से कम है = (20/120) × 100 = 16.67%',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-per-004',
                  text: 'Two numbers are 20% and 30% less than a third number. The first number is what percent of the second?',
                  textHi: 'दो संख्याएं तीसरी संख्या से क्रमशः 20% और 30% कम हैं। पहली संख्या दूसरी का कितना प्रतिशत है?',
                  options: ['114.28%', '85.71%', '110%', '90%'],
                  optionsHi: ['114.28%', '85.71%', '110%', '90%'],
                  correctAnswer: 0,
                  explanation: 'First = 80%, Second = 70% of third. First/Second = 80/70 = 114.28%',
                  explanationHi: 'पहली = 80%, दूसरी = तीसरी का 70%। पहली/दूसरी = 80/70 = 114.28%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-per-005',
                  text: 'The population of a town increases by 5% every year. If the present population is 8000, what will it be after 2 years?',
                  textHi: 'एक शहर की जनसंख्या हर वर्ष 5% बढ़ती है। यदि वर्तमान जनसंख्या 8000 है, तो 2 वर्ष बाद कितनी होगी?',
                  options: ['8820', '8400', '8800', '8810'],
                  optionsHi: ['8820', '8400', '8800', '8810'],
                  correctAnswer: 0,
                  explanation: 'Population after 2 years = 8000 × (1.05)² = 8000 × 1.1025 = 8820',
                  explanationHi: '2 वर्ष बाद जनसंख्या = 8000 × (1.05)² = 8000 × 1.1025 = 8820',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-per-006',
                  text: 'A shopkeeper marks his goods 30% above cost price but allows 15% discount. His profit percent is:',
                  textHi: 'एक दुकानदार अपने माल पर लागत मूल्य से 30% अधिक अंकित करता है लेकिन 15% छूट देता है। उसका लाभ प्रतिशत है:',
                  options: ['10.5%', '15%', '12%', '11%'],
                  optionsHi: ['10.5%', '15%', '12%', '11%'],
                  correctAnswer: 0,
                  explanation: 'SP = 130 × 0.85 = 110.5. Profit = 10.5%',
                  explanationHi: 'विक्रय मूल्य = 130 × 0.85 = 110.5। लाभ = 10.5%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-per-007',
                  text: 'In an examination, 35% students failed in Hindi, 45% failed in English, and 20% failed in both. What is the pass percentage?',
                  textHi: 'एक परीक्षा में 35% छात्र हिंदी में, 45% अंग्रेजी में और 20% दोनों में अनुत्तीर्ण हुए। उत्तीर्ण प्रतिशत क्या है?',
                  options: ['40%', '45%', '50%', '35%'],
                  optionsHi: ['40%', '45%', '50%', '35%'],
                  correctAnswer: 0,
                  explanation: 'Failed in at least one = 35 + 45 - 20 = 60%. Pass = 100 - 60 = 40%',
                  explanationHi: 'कम से कम एक में अनुत्तीर्ण = 35 + 45 - 20 = 60%। उत्तीर्ण = 100 - 60 = 40%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-per-008',
                  text: 'A\'s salary is 50% more than B\'s. By what percent is B\'s salary less than A\'s?',
                  textHi: 'A का वेतन B से 50% अधिक है। B का वेतन A से कितने प्रतिशत कम है?',
                  options: ['33.33%', '50%', '25%', '40%'],
                  optionsHi: ['33.33%', '50%', '25%', '40%'],
                  correctAnswer: 0,
                  explanation: 'B less than A = (50/150) × 100 = 33.33%',
                  explanationHi: 'B, A से कम = (50/150) × 100 = 33.33%',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-per-009',
                  text: 'If 60% of A = 40% of B, then A : B is:',
                  textHi: 'यदि A का 60% = B का 40%, तो A : B है:',
                  options: ['2 : 3', '3 : 2', '1 : 2', '2 : 1'],
                  optionsHi: ['2 : 3', '3 : 2', '1 : 2', '2 : 1'],
                  correctAnswer: 0,
                  explanation: '0.6A = 0.4B, A/B = 0.4/0.6 = 2/3. So A : B = 2 : 3',
                  explanationHi: '0.6A = 0.4B, A/B = 0.4/0.6 = 2/3। अतः A : B = 2 : 3',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-per-010',
                  text: 'The price of a commodity is increased by 40%. By what percent must a person reduce consumption to keep expenditure same?',
                  textHi: 'एक वस्तु की कीमत में 40% की वृद्धि होती है। एक व्यक्ति को खर्च समान रखने के लिए उपभोग में कितने प्रतिशत की कमी करनी चाहिए?',
                  options: ['28.57%', '40%', '30%', '25%'],
                  optionsHi: ['28.57%', '40%', '30%', '25%'],
                  correctAnswer: 0,
                  explanation: 'Reduction = (40/140) × 100 = 28.57%',
                  explanationHi: 'कमी = (40/140) × 100 = 28.57%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-per-011',
                  text: 'The salary of a person is first increased by 10%, then decreased by 10%. The change in salary is:',
                  textHi: 'एक व्यक्ति का वेतन पहले 10% बढ़ाया जाता है, फिर 10% घटाया जाता है। वेतन में परिवर्तन है:',
                  options: ['1% decrease', '1% increase', 'No change', '2% decrease'],
                  optionsHi: ['1% कमी', '1% वृद्धि', 'कोई परिवर्तन नहीं', '2% कमी'],
                  correctAnswer: 0,
                  explanation: 'Net effect = 10 × 10 / 100 = 1% decrease',
                  explanationHi: 'शुद्ध प्रभाव = 10 × 10 / 100 = 1% कमी',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-per-012',
                  text: 'If the radius of a circle is increased by 10%, by what percent does its area increase?',
                  textHi: 'यदि एक वृत्त की त्रिज्या में 10% की वृद्धि होती है, तो इसका क्षेत्रफल कितने प्रतिशत बढ़ता है?',
                  options: ['21%', '10%', '20%', '11%'],
                  optionsHi: ['21%', '10%', '20%', '11%'],
                  correctAnswer: 0,
                  explanation: 'Area increase = 2×10 + (10×10)/100 = 20 + 1 = 21%',
                  explanationHi: 'क्षेत्रफल वृद्धि = 2×10 + (10×10)/100 = 20 + 1 = 21%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-per-013',
                  text: 'A student scores 80% marks and fails by 10 marks. The pass marks are:',
                  textHi: 'एक छात्र को 80% अंक मिलते हैं और वह 10 अंकों से अनुत्तीर्ण हो जाता है। उत्तीर्ण अंक हैं:',
                  options: ['Cannot be determined', '90', '100', '110'],
                  optionsHi: ['निर्धारित नहीं किया जा सकता', '90', '100', '110'],
                  correctAnswer: 0,
                  explanation: 'We need total marks to calculate. With only percentage and failing margin, pass marks cannot be determined.',
                  explanationHi: 'हमें कुल अंकों की आवश्यकता है। केवल प्रतिशत और अनुत्तीर्ण अंतर से उत्तीर्ण अंक निर्धारित नहीं किए जा सकते।',
                  difficulty: 'hard',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-per-014',
                  text: 'In an election between two candidates, one got 55% of the total valid votes. 20% of votes were invalid. If total votes were 7500, how many valid votes did the winner get?',
                  textHi: 'दो उम्मीदवारों के बीच एक चुनाव में, एक को कुल वैध मतों का 55% मिला। 20% मत अवैध थे। यदि कुल मत 7500 थे, तो विजेता को कितने वैध मत मिले?',
                  options: ['3300', '4125', '3000', '3500'],
                  optionsHi: ['3300', '4125', '3000', '3500'],
                  correctAnswer: 0,
                  explanation: 'Valid votes = 80% of 7500 = 6000. Winner\'s votes = 55% of 6000 = 3300',
                  explanationHi: 'वैध मत = 7500 का 80% = 6000। विजेता के मत = 6000 का 55% = 3300',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-per-015',
                  text: 'What is 25% of 40% of 200?',
                  textHi: '200 के 40% का 25% क्या है?',
                  options: ['20', '25', '30', '15'],
                  optionsHi: ['20', '25', '30', '15'],
                  correctAnswer: 0,
                  explanation: '40% of 200 = 80. 25% of 80 = 20',
                  explanationHi: '200 का 40% = 80। 80 का 25% = 20',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                }
              ]
            },
            {
              id: 'profit-loss',
              name: 'Profit and Loss',
              nameHi: 'लाभ और हानि',
              difficulty: 'medium',
              questions: [
                {
                  id: 'ssc-qa-pl-001',
                  text: 'A man buys an article for Rs. 100 and sells it at a profit of 20%. What is the selling price?',
                  textHi: 'एक व्यक्ति एक वस्तु को 100 रुपये में खरीदता है और 20% लाभ पर बेचता है। विक्रय मूल्य क्या है?',
                  options: ['Rs. 120', 'Rs. 110', 'Rs. 125', 'Rs. 115'],
                  optionsHi: ['120 रुपये', '110 रुपये', '125 रुपये', '115 रुपये'],
                  correctAnswer: 0,
                  explanation: 'SP = CP × (100 + Profit%)/100 = 100 × 120/100 = Rs. 120',
                  explanationHi: 'विक्रय मूल्य = लागत × (100 + लाभ%)/100 = 100 × 120/100 = 120 रुपये',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-pl-002',
                  text: 'By selling 33 metres of cloth, a shopkeeper gains the cost of 11 metres. His gain percent is:',
                  textHi: '33 मीटर कपड़ा बेचने पर, एक दुकानदार को 11 मीटर की लागत का लाभ होता है। उसका लाभ प्रतिशत है:',
                  options: ['33.33%', '25%', '30%', '50%'],
                  optionsHi: ['33.33%', '25%', '30%', '50%'],
                  correctAnswer: 0,
                  explanation: 'Gain% = (Gain/CP) × 100 = (11/33) × 100 = 33.33%',
                  explanationHi: 'लाभ% = (लाभ/लागत) × 100 = (11/33) × 100 = 33.33%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-pl-003',
                  text: 'A trader marks his goods 40% above cost price and gives 20% discount. His profit percent is:',
                  textHi: 'एक व्यापारी अपने माल पर लागत मूल्य से 40% अधिक अंकित करता है और 20% छूट देता है। उसका लाभ प्रतिशत है:',
                  options: ['12%', '20%', '15%', '10%'],
                  optionsHi: ['12%', '20%', '15%', '10%'],
                  correctAnswer: 0,
                  explanation: 'SP = 140 × 0.80 = 112. Profit = 12%',
                  explanationHi: 'विक्रय मूल्य = 140 × 0.80 = 112। लाभ = 12%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-pl-004',
                  text: 'A shopkeeper sold an article for Rs. 2500 with 25% profit. The cost price was:',
                  textHi: 'एक दुकानदार ने एक वस्तु को 25% लाभ पर 2500 रुपये में बेचा। लागत मूल्य था:',
                  options: ['Rs. 2000', 'Rs. 1875', 'Rs. 2100', 'Rs. 1900'],
                  optionsHi: ['2000 रुपये', '1875 रुपये', '2100 रुपये', '1900 रुपये'],
                  correctAnswer: 0,
                  explanation: 'CP = SP × 100/(100 + Profit%) = 2500 × 100/125 = Rs. 2000',
                  explanationHi: 'लागत = विक्रय × 100/(100 + लाभ%) = 2500 × 100/125 = 2000 रुपये',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-pl-005',
                  text: 'If selling price is doubled, the profit triples. The profit percent is:',
                  textHi: 'यदि विक्रय मूल्य दोगुना कर दिया जाए, तो लाभ तीन गुना हो जाता है। लाभ प्रतिशत है:',
                  options: ['100%', '50%', '75%', '200%'],
                  optionsHi: ['100%', '50%', '75%', '200%'],
                  correctAnswer: 0,
                  explanation: 'Let CP = x, SP = y. Profit = y - x. New: 2y - x = 3(y - x). Solving: y = 2x. Profit = 100%',
                  explanationHi: 'माना CP = x, SP = y। लाभ = y - x। नया: 2y - x = 3(y - x)। हल करने पर: y = 2x। लाभ = 100%',
                  difficulty: 'hard',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-pl-006',
                  text: 'A man sold two chairs at Rs. 500 each, gaining 20% on one and losing 20% on the other. His net gain or loss is:',
                  textHi: 'एक व्यक्ति ने दो कुर्सियां 500 रुपये प्रत्येक पर बेचीं, एक पर 20% लाभ और दूसरी पर 20% हानि। उसका शुद्ध लाभ या हानि है:',
                  options: ['4% loss', 'No profit, no loss', '4% profit', '2% loss'],
                  optionsHi: ['4% हानि', 'न लाभ, न हानि', '4% लाभ', '2% हानि'],
                  correctAnswer: 0,
                  explanation: 'When SP is same and profit% = loss%, there is always a loss = (common%)²/100 = 400/100 = 4%',
                  explanationHi: 'जब SP समान हो और लाभ% = हानि%, हमेशा हानि = (समान%)²/100 = 400/100 = 4%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-pl-007',
                  text: 'An article was sold at a loss of 5%. If it was sold for Rs. 36 more, there would have been a profit of 4%. The cost price is:',
                  textHi: 'एक वस्तु को 5% हानि पर बेचा गया। यदि इसे 36 रुपये अधिक में बेचा जाता, तो 4% लाभ होता। लागत मूल्य है:',
                  options: ['Rs. 400', 'Rs. 360', 'Rs. 450', 'Rs. 380'],
                  optionsHi: ['400 रुपये', '360 रुपये', '450 रुपये', '380 रुपये'],
                  correctAnswer: 0,
                  explanation: 'Difference = 9% of CP = 36. CP = 36 × 100/9 = Rs. 400',
                  explanationHi: 'अंतर = CP का 9% = 36। CP = 36 × 100/9 = 400 रुपये',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-pl-008',
                  text: 'A dealer offers a discount of 10% and still gains 8%. What is the markup percentage?',
                  textHi: 'एक डीलर 10% छूट देता है और फिर भी 8% लाभ कमाता है। अंकन प्रतिशत क्या है?',
                  options: ['20%', '18%', '15%', '22%'],
                  optionsHi: ['20%', '18%', '15%', '22%'],
                  correctAnswer: 0,
                  explanation: 'Let CP = 100. SP = 108. MP × 0.9 = 108. MP = 120. Markup = 20%',
                  explanationHi: 'माना CP = 100। SP = 108। MP × 0.9 = 108। MP = 120। अंकन = 20%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-pl-009',
                  text: 'The cost price of 15 articles is equal to selling price of 12 articles. The profit percent is:',
                  textHi: '15 वस्तुओं का लागत मूल्य 12 वस्तुओं के विक्रय मूल्य के बराबर है। लाभ प्रतिशत है:',
                  options: ['25%', '20%', '30%', '15%'],
                  optionsHi: ['25%', '20%', '30%', '15%'],
                  correctAnswer: 0,
                  explanation: 'CP of 15 = SP of 12. Profit = (15-12)/12 × 100 = 25%',
                  explanationHi: '15 का CP = 12 का SP। लाभ = (15-12)/12 × 100 = 25%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-pl-010',
                  text: 'A sold a bicycle to B at 10% profit, B sold it to C at 20% profit. If C paid Rs. 1320, the original price was:',
                  textHi: 'A ने B को 10% लाभ पर एक साइकिल बेची, B ने इसे C को 20% लाभ पर बेची। यदि C ने 1320 रुपये दिए, तो मूल मूल्य था:',
                  options: ['Rs. 1000', 'Rs. 1100', 'Rs. 1200', 'Rs. 900'],
                  optionsHi: ['1000 रुपये', '1100 रुपये', '1200 रुपये', '900 रुपये'],
                  correctAnswer: 0,
                  explanation: 'Original = 1320 / (1.1 × 1.2) = 1320 / 1.32 = Rs. 1000',
                  explanationHi: 'मूल = 1320 / (1.1 × 1.2) = 1320 / 1.32 = 1000 रुपये',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-pl-011',
                  text: 'A shopkeeper uses 900 gm weight instead of 1 kg. His profit percent is:',
                  textHi: 'एक दुकानदार 1 किलो की जगह 900 ग्राम बाट का उपयोग करता है। उसका लाभ प्रतिशत है:',
                  options: ['11.11%', '10%', '9%', '12%'],
                  optionsHi: ['11.11%', '10%', '9%', '12%'],
                  correctAnswer: 0,
                  explanation: 'Profit% = (Error/True value) × 100 = (100/900) × 100 = 11.11%',
                  explanationHi: 'लाभ% = (त्रुटि/सही मान) × 100 = (100/900) × 100 = 11.11%',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-pl-012',
                  text: 'By selling an article at 80% of marked price, a trader loses 10%. What is the profit percent if sold at marked price?',
                  textHi: 'अंकित मूल्य के 80% पर एक वस्तु बेचने पर एक व्यापारी को 10% हानि होती है। यदि अंकित मूल्य पर बेचा जाए तो लाभ प्रतिशत क्या है?',
                  options: ['12.5%', '10%', '15%', '20%'],
                  optionsHi: ['12.5%', '10%', '15%', '20%'],
                  correctAnswer: 0,
                  explanation: '0.8 MP = 0.9 CP. MP/CP = 9/8 = 1.125. Profit = 12.5%',
                  explanationHi: '0.8 MP = 0.9 CP। MP/CP = 9/8 = 1.125। लाभ = 12.5%',
                  difficulty: 'hard',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-pl-013',
                  text: 'A sells goods to B at 5% profit and B sells to C at 10% profit. If C pays Rs. 462, what did A pay?',
                  textHi: 'A, B को 5% लाभ पर माल बेचता है और B, C को 10% लाभ पर बेचता है। यदि C 462 रुपये देता है, तो A ने कितना भुगतान किया?',
                  options: ['Rs. 400', 'Rs. 420', 'Rs. 440', 'Rs. 380'],
                  optionsHi: ['400 रुपये', '420 रुपये', '440 रुपये', '380 रुपये'],
                  correctAnswer: 0,
                  explanation: 'A\'s cost = 462 / (1.05 × 1.10) = 462 / 1.155 = Rs. 400',
                  explanationHi: 'A की लागत = 462 / (1.05 × 1.10) = 462 / 1.155 = 400 रुपये',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-pl-014',
                  text: 'If an article is sold at a profit of 30% instead of 20%, Rs. 30 more is earned. The cost price is:',
                  textHi: 'यदि एक वस्तु को 20% की बजाय 30% लाभ पर बेचा जाए, तो 30 रुपये अधिक मिलते हैं। लागत मूल्य है:',
                  options: ['Rs. 300', 'Rs. 250', 'Rs. 350', 'Rs. 400'],
                  optionsHi: ['300 रुपये', '250 रुपये', '350 रुपये', '400 रुपये'],
                  correctAnswer: 0,
                  explanation: '10% of CP = 30. CP = Rs. 300',
                  explanationHi: 'CP का 10% = 30। CP = 300 रुपये',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-pl-015',
                  text: 'A reduction of 20% in the price of sugar enables a buyer to get 5 kg more for Rs. 320. The original price per kg is:',
                  textHi: 'चीनी की कीमत में 20% की कमी से एक खरीदार 320 रुपये में 5 किलो अधिक ले सकता है। मूल मूल्य प्रति किलो है:',
                  options: ['Rs. 16', 'Rs. 15', 'Rs. 18', 'Rs. 20'],
                  optionsHi: ['16 रुपये', '15 रुपये', '18 रुपये', '20 रुपये'],
                  correctAnswer: 0,
                  explanation: 'Let original price = x. 320/0.8x - 320/x = 5. Solving: x = Rs. 16',
                  explanationHi: 'माना मूल मूल्य = x। 320/0.8x - 320/x = 5। हल करने पर: x = 16 रुपये',
                  difficulty: 'hard',
                  year: 'SSC CGL 2020'
                }
              ]
            }
          ]
        },
        {
          id: 'algebra',
          name: 'Algebra',
          nameHi: 'बीजगणित',
          chapters: [
            {
              id: 'linear-equations',
              name: 'Linear Equations',
              nameHi: 'रैखिक समीकरण',
              difficulty: 'medium',
              questions: [
                {
                  id: 'ssc-qa-le-001',
                  text: 'If 3x + 5y = 21 and 2x + 3y = 13, then the value of x is:',
                  textHi: 'यदि 3x + 5y = 21 और 2x + 3y = 13, तो x का मान है:',
                  options: ['2', '3', '4', '5'],
                  optionsHi: ['2', '3', '4', '5'],
                  correctAnswer: 0,
                  explanation: 'Multiply first by 3, second by 5: 9x + 15y = 63, 10x + 15y = 65. Subtracting: x = 2',
                  explanationHi: 'पहले को 3 से, दूसरे को 5 से गुणा करें: 9x + 15y = 63, 10x + 15y = 65। घटाने पर: x = 2',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-le-002',
                  text: 'If x + y = 10 and xy = 21, then the value of x² + y² is:',
                  textHi: 'यदि x + y = 10 और xy = 21, तो x² + y² का मान है:',
                  options: ['58', '52', '48', '62'],
                  optionsHi: ['58', '52', '48', '62'],
                  correctAnswer: 0,
                  explanation: 'x² + y² = (x + y)² - 2xy = 100 - 42 = 58',
                  explanationHi: 'x² + y² = (x + y)² - 2xy = 100 - 42 = 58',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-le-003',
                  text: 'If a + b = 5 and ab = 6, then the value of a³ + b³ is:',
                  textHi: 'यदि a + b = 5 और ab = 6, तो a³ + b³ का मान है:',
                  options: ['35', '25', '45', '30'],
                  optionsHi: ['35', '25', '45', '30'],
                  correctAnswer: 0,
                  explanation: 'a³ + b³ = (a + b)³ - 3ab(a + b) = 125 - 3(6)(5) = 125 - 90 = 35',
                  explanationHi: 'a³ + b³ = (a + b)³ - 3ab(a + b) = 125 - 3(6)(5) = 125 - 90 = 35',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-le-004',
                  text: 'If x = 3 + 2√2, then the value of x + 1/x is:',
                  textHi: 'यदि x = 3 + 2√2, तो x + 1/x का मान है:',
                  options: ['6', '4', '5', '8'],
                  optionsHi: ['6', '4', '5', '8'],
                  correctAnswer: 0,
                  explanation: '1/x = 1/(3+2√2) = (3-2√2)/1 = 3-2√2. So x + 1/x = 6',
                  explanationHi: '1/x = 1/(3+2√2) = (3-2√2)/1 = 3-2√2। अतः x + 1/x = 6',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-le-005',
                  text: 'If x² - 3x + 1 = 0, then the value of x³ + 1/x³ is:',
                  textHi: 'यदि x² - 3x + 1 = 0, तो x³ + 1/x³ का मान है:',
                  options: ['18', '27', '9', '24'],
                  optionsHi: ['18', '27', '9', '24'],
                  correctAnswer: 0,
                  explanation: 'From equation, x + 1/x = 3. So x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 27 - 9 = 18',
                  explanationHi: 'समीकरण से, x + 1/x = 3। अतः x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 27 - 9 = 18',
                  difficulty: 'hard',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-le-006',
                  text: 'The sum of two numbers is 25 and their difference is 5. The product of the numbers is:',
                  textHi: 'दो संख्याओं का योग 25 है और उनका अंतर 5 है। संख्याओं का गुणनफल है:',
                  options: ['150', '125', '100', '175'],
                  optionsHi: ['150', '125', '100', '175'],
                  correctAnswer: 0,
                  explanation: 'x + y = 25, x - y = 5. So 2x = 30, x = 15, y = 10. Product = 150',
                  explanationHi: 'x + y = 25, x - y = 5। अतः 2x = 30, x = 15, y = 10। गुणनफल = 150',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-le-007',
                  text: 'If (a - b) = 4 and ab = 21, then the value of a³ - b³ is:',
                  textHi: 'यदि (a - b) = 4 और ab = 21, तो a³ - b³ का मान है:',
                  options: ['316', '256', '284', '300'],
                  optionsHi: ['316', '256', '284', '300'],
                  correctAnswer: 0,
                  explanation: 'a² + b² = (a-b)² + 2ab = 16 + 42 = 58. a³ - b³ = (a-b)(a² + ab + b²) = 4(58 + 21) = 316',
                  explanationHi: 'a² + b² = (a-b)² + 2ab = 16 + 42 = 58। a³ - b³ = (a-b)(a² + ab + b²) = 4(58 + 21) = 316',
                  difficulty: 'hard',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-le-008',
                  text: 'If x + 1/x = 4, then the value of x⁴ + 1/x⁴ is:',
                  textHi: 'यदि x + 1/x = 4, तो x⁴ + 1/x⁴ का मान है:',
                  options: ['194', '196', '192', '198'],
                  optionsHi: ['194', '196', '192', '198'],
                  correctAnswer: 0,
                  explanation: 'x² + 1/x² = 16 - 2 = 14. x⁴ + 1/x⁴ = 196 - 2 = 194',
                  explanationHi: 'x² + 1/x² = 16 - 2 = 14। x⁴ + 1/x⁴ = 196 - 2 = 194',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-le-009',
                  text: 'If a + b + c = 0, then the value of a² + b² + c² / (a² - bc) is:',
                  textHi: 'यदि a + b + c = 0, तो a² + b² + c² / (a² - bc) का मान है:',
                  options: ['2', '1', '0', '3'],
                  optionsHi: ['2', '1', '0', '3'],
                  correctAnswer: 0,
                  explanation: 'If a + b + c = 0, then a² + b² + c² = 2(ab + bc + ca). Also a² = bc - (ab + ca). Value = 2',
                  explanationHi: 'यदि a + b + c = 0, तो a² + b² + c² = 2(ab + bc + ca)। साथ ही a² = bc - (ab + ca)। मान = 2',
                  difficulty: 'hard',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-le-010',
                  text: 'Solve: (x - 2)/(x + 3) = (x - 4)/(x + 5)',
                  textHi: 'हल करें: (x - 2)/(x + 3) = (x - 4)/(x + 5)',
                  options: ['x = 1', 'x = 2', 'x = -1', 'x = 0'],
                  optionsHi: ['x = 1', 'x = 2', 'x = -1', 'x = 0'],
                  correctAnswer: 0,
                  explanation: 'Cross multiply: (x-2)(x+5) = (x-4)(x+3). Expanding: x²+3x-10 = x²-x-12. 4x = -2. x = 1',
                  explanationHi: 'क्रॉस गुणा: (x-2)(x+5) = (x-4)(x+3)। विस्तार: x²+3x-10 = x²-x-12। 4x = -2। x = 1',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-le-011',
                  text: 'If 2^(x+3) = 8^(x-1), then x is:',
                  textHi: 'यदि 2^(x+3) = 8^(x-1), तो x है:',
                  options: ['3', '2', '4', '1'],
                  optionsHi: ['3', '2', '4', '1'],
                  correctAnswer: 0,
                  explanation: '2^(x+3) = 2^(3(x-1)). So x+3 = 3x-3. 2x = 6. x = 3',
                  explanationHi: '2^(x+3) = 2^(3(x-1))। अतः x+3 = 3x-3। 2x = 6। x = 3',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-le-012',
                  text: 'If x = 2 + √3, then the value of x² + 1/x² is:',
                  textHi: 'यदि x = 2 + √3, तो x² + 1/x² का मान है:',
                  options: ['14', '12', '16', '10'],
                  optionsHi: ['14', '12', '16', '10'],
                  correctAnswer: 0,
                  explanation: '1/x = 2 - √3. x + 1/x = 4. x² + 1/x² = 16 - 2 = 14',
                  explanationHi: '1/x = 2 - √3। x + 1/x = 4। x² + 1/x² = 16 - 2 = 14',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-qa-le-013',
                  text: 'If a² + b² + c² = ab + bc + ca, then (a + c)/b is:',
                  textHi: 'यदि a² + b² + c² = ab + bc + ca, तो (a + c)/b है:',
                  options: ['2', '1', '3', '4'],
                  optionsHi: ['2', '1', '3', '4'],
                  correctAnswer: 0,
                  explanation: 'This implies a = b = c. So (a + c)/b = 2b/b = 2',
                  explanationHi: 'इसका अर्थ है a = b = c। अतः (a + c)/b = 2b/b = 2',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-qa-le-014',
                  text: 'If x = (√5 - 2)/(√5 + 2), then x² is:',
                  textHi: 'यदि x = (√5 - 2)/(√5 + 2), तो x² है:',
                  options: ['161 - 72√5', '161 + 72√5', '72√5 - 161', '144 - 64√5'],
                  optionsHi: ['161 - 72√5', '161 + 72√5', '72√5 - 161', '144 - 64√5'],
                  correctAnswer: 0,
                  explanation: 'Rationalize: x = (√5-2)²/(5-4) = 9 - 4√5. x² = 81 + 80 - 72√5 = 161 - 72√5',
                  explanationHi: 'परिमेय बनाएं: x = (√5-2)²/(5-4) = 9 - 4√5। x² = 81 + 80 - 72√5 = 161 - 72√5',
                  difficulty: 'hard',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-qa-le-015',
                  text: 'If p + q = 6 and pq = 8, then p³ + q³ is:',
                  textHi: 'यदि p + q = 6 और pq = 8, तो p³ + q³ है:',
                  options: ['72', '64', '80', '56'],
                  optionsHi: ['72', '64', '80', '56'],
                  correctAnswer: 0,
                  explanation: 'p³ + q³ = (p + q)³ - 3pq(p + q) = 216 - 3(8)(6) = 216 - 144 = 72',
                  explanationHi: 'p³ + q³ = (p + q)³ - 3pq(p + q) = 216 - 3(8)(6) = 216 - 144 = 72',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'general-intelligence',
      name: 'General Intelligence & Reasoning',
      nameHi: 'सामान्य बुद्धि एवं तर्कशक्ति',
      icon: 'Brain',
      color: '#7C3AED',
      topics: [
        {
          id: 'verbal-reasoning',
          name: 'Verbal Reasoning',
          nameHi: 'मौखिक तर्क',
          chapters: [
            {
              id: 'analogy',
              name: 'Analogy',
              nameHi: 'सादृश्यता',
              difficulty: 'easy',
              questions: [
                {
                  id: 'ssc-gi-an-001',
                  text: 'BIRD : NEST :: HORSE : ?',
                  textHi: 'पक्षी : घोंसला :: घोड़ा : ?',
                  options: ['Stable', 'Hole', 'Kennel', 'Burrow'],
                  optionsHi: ['अस्तबल', 'बिल', 'कुत्ताघर', 'माँद'],
                  correctAnswer: 0,
                  explanation: 'Bird lives in nest, similarly horse lives in stable.',
                  explanationHi: 'पक्षी घोंसले में रहता है, इसी प्रकार घोड़ा अस्तबल में रहता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-gi-an-002',
                  text: 'DOCTOR : PATIENT :: LAWYER : ?',
                  textHi: 'डॉक्टर : मरीज :: वकील : ?',
                  options: ['Client', 'Judge', 'Court', 'Criminal'],
                  optionsHi: ['मुवक्किल', 'न्यायाधीश', 'अदालत', 'अपराधी'],
                  correctAnswer: 0,
                  explanation: 'Doctor treats patient, similarly lawyer represents client.',
                  explanationHi: 'डॉक्टर मरीज का इलाज करता है, इसी प्रकार वकील मुवक्किल का प्रतिनिधित्व करता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-gi-an-003',
                  text: 'PAINTER : BRUSH :: WRITER : ?',
                  textHi: 'चित्रकार : ब्रश :: लेखक : ?',
                  options: ['Pen', 'Paper', 'Book', 'Ink'],
                  optionsHi: ['कलम', 'कागज', 'किताब', 'स्याही'],
                  correctAnswer: 0,
                  explanation: 'Painter uses brush as tool, similarly writer uses pen.',
                  explanationHi: 'चित्रकार ब्रश को उपकरण के रूप में उपयोग करता है, इसी प्रकार लेखक कलम का उपयोग करता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-gi-an-004',
                  text: '25 : 125 :: 36 : ?',
                  textHi: '25 : 125 :: 36 : ?',
                  options: ['216', '196', '180', '144'],
                  optionsHi: ['216', '196', '180', '144'],
                  correctAnswer: 0,
                  explanation: '5² = 25, 5³ = 125. Similarly 6² = 36, 6³ = 216',
                  explanationHi: '5² = 25, 5³ = 125। इसी प्रकार 6² = 36, 6³ = 216',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-gi-an-005',
                  text: 'FLOWER : GARDEN :: STAR : ?',
                  textHi: 'फूल : बगीचा :: तारा : ?',
                  options: ['Sky', 'Moon', 'Sun', 'Night'],
                  optionsHi: ['आकाश', 'चाँद', 'सूर्य', 'रात'],
                  correctAnswer: 0,
                  explanation: 'Flowers are found in garden, similarly stars are found in sky.',
                  explanationHi: 'फूल बगीचे में पाए जाते हैं, इसी प्रकार तारे आकाश में पाए जाते हैं।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-gi-an-006',
                  text: 'OCEAN : WATER :: GLACIER : ?',
                  textHi: 'महासागर : पानी :: हिमनद : ?',
                  options: ['Ice', 'Snow', 'Mountain', 'Cold'],
                  optionsHi: ['बर्फ', 'हिम', 'पर्वत', 'ठंडा'],
                  correctAnswer: 0,
                  explanation: 'Ocean is made of water, similarly glacier is made of ice.',
                  explanationHi: 'महासागर पानी से बना है, इसी प्रकार हिमनद बर्फ से बना है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-gi-an-007',
                  text: 'TEACHER : SCHOOL :: CHEF : ?',
                  textHi: 'शिक्षक : स्कूल :: बावर्ची : ?',
                  options: ['Kitchen', 'Food', 'Restaurant', 'Hotel'],
                  optionsHi: ['रसोई', 'भोजन', 'रेस्तरां', 'होटल'],
                  correctAnswer: 0,
                  explanation: 'Teacher works in school, similarly chef works in kitchen.',
                  explanationHi: 'शिक्षक स्कूल में काम करता है, इसी प्रकार बावर्ची रसोई में काम करता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-gi-an-008',
                  text: '4 : 20 :: 6 : ?',
                  textHi: '4 : 20 :: 6 : ?',
                  options: ['42', '36', '30', '48'],
                  optionsHi: ['42', '36', '30', '48'],
                  correctAnswer: 0,
                  explanation: '4 × (4 + 1) = 20. Similarly 6 × (6 + 1) = 42',
                  explanationHi: '4 × (4 + 1) = 20। इसी प्रकार 6 × (6 + 1) = 42',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-gi-an-009',
                  text: 'KNIFE : CUT :: NEEDLE : ?',
                  textHi: 'चाकू : काटना :: सुई : ?',
                  options: ['Stitch', 'Prick', 'Thread', 'Cloth'],
                  optionsHi: ['सिलाई', 'चुभना', 'धागा', 'कपड़ा'],
                  correctAnswer: 0,
                  explanation: 'Knife is used to cut, similarly needle is used to stitch.',
                  explanationHi: 'चाकू काटने के लिए प्रयोग होता है, इसी प्रकार सुई सिलाई के लिए प्रयोग होती है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-gi-an-010',
                  text: 'LION : CARNIVORE :: COW : ?',
                  textHi: 'शेर : मांसाहारी :: गाय : ?',
                  options: ['Herbivore', 'Omnivore', 'Animal', 'Mammal'],
                  optionsHi: ['शाकाहारी', 'सर्वाहारी', 'जानवर', 'स्तनधारी'],
                  correctAnswer: 0,
                  explanation: 'Lion is a carnivore (meat eater), cow is a herbivore (plant eater).',
                  explanationHi: 'शेर मांसाहारी है, गाय शाकाहारी है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-gi-an-011',
                  text: '8 : 72 :: 12 : ?',
                  textHi: '8 : 72 :: 12 : ?',
                  options: ['156', '144', '132', '168'],
                  optionsHi: ['156', '144', '132', '168'],
                  correctAnswer: 0,
                  explanation: '8 × (8 + 1) = 72. Similarly 12 × (12 + 1) = 156',
                  explanationHi: '8 × (8 + 1) = 72। इसी प्रकार 12 × (12 + 1) = 156',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-gi-an-012',
                  text: 'MANGO : FRUIT :: CARROT : ?',
                  textHi: 'आम : फल :: गाजर : ?',
                  options: ['Vegetable', 'Root', 'Plant', 'Orange'],
                  optionsHi: ['सब्जी', 'जड़', 'पौधा', 'नारंगी'],
                  correctAnswer: 0,
                  explanation: 'Mango is a fruit, carrot is a vegetable.',
                  explanationHi: 'आम एक फल है, गाजर एक सब्जी है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-gi-an-013',
                  text: 'HAND : GLOVE :: FOOT : ?',
                  textHi: 'हाथ : दस्ताना :: पैर : ?',
                  options: ['Sock', 'Shoe', 'Sandal', 'Slipper'],
                  optionsHi: ['मोज़ा', 'जूता', 'सैंडल', 'चप्पल'],
                  correctAnswer: 0,
                  explanation: 'Glove covers hand, similarly sock covers foot.',
                  explanationHi: 'दस्ताना हाथ को ढकता है, इसी प्रकार मोज़ा पैर को ढकता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-gi-an-014',
                  text: 'CARPENTER : WOOD :: MASON : ?',
                  textHi: 'बढ़ई : लकड़ी :: राजमिस्त्री : ?',
                  options: ['Bricks', 'Cement', 'Stone', 'Building'],
                  optionsHi: ['ईंट', 'सीमेंट', 'पत्थर', 'इमारत'],
                  correctAnswer: 0,
                  explanation: 'Carpenter works with wood, similarly mason works with bricks.',
                  explanationHi: 'बढ़ई लकड़ी के साथ काम करता है, इसी प्रकार राजमिस्त्री ईंटों के साथ काम करता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-gi-an-015',
                  text: '16 : 56 :: 32 : ?',
                  textHi: '16 : 56 :: 32 : ?',
                  options: ['112', '96', '128', '104'],
                  optionsHi: ['112', '96', '128', '104'],
                  correctAnswer: 0,
                  explanation: '16 × 3.5 = 56. Similarly 32 × 3.5 = 112',
                  explanationHi: '16 × 3.5 = 56। इसी प्रकार 32 × 3.5 = 112',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'english',
      name: 'English Language',
      nameHi: 'अंग्रेजी भाषा',
      icon: 'BookOpen',
      color: '#059669',
      topics: [
        {
          id: 'vocabulary',
          name: 'Vocabulary',
          nameHi: 'शब्दावली',
          chapters: [
            {
              id: 'synonyms-antonyms',
              name: 'Synonyms & Antonyms',
              nameHi: 'पर्यायवाची और विलोम',
              difficulty: 'easy',
              questions: [
                {
                  id: 'ssc-en-sa-001',
                  text: 'Choose the word which is most similar in meaning to "ABUNDANT"',
                  textHi: '"ABUNDANT" के समान अर्थ वाला शब्द चुनें',
                  options: ['Plentiful', 'Scarce', 'Limited', 'Few'],
                  optionsHi: ['प्रचुर', 'दुर्लभ', 'सीमित', 'कम'],
                  correctAnswer: 0,
                  explanation: 'Abundant means existing in large quantities; plentiful.',
                  explanationHi: 'Abundant का अर्थ है बड़ी मात्रा में मौजूद; प्रचुर।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-en-sa-002',
                  text: 'Choose the word opposite in meaning to "BENEVOLENT"',
                  textHi: '"BENEVOLENT" के विपरीत अर्थ वाला शब्द चुनें',
                  options: ['Malevolent', 'Kind', 'Generous', 'Helpful'],
                  optionsHi: ['दुर्भावनापूर्ण', 'दयालु', 'उदार', 'सहायक'],
                  correctAnswer: 0,
                  explanation: 'Benevolent means kind and generous. Malevolent is the opposite - wishing harm.',
                  explanationHi: 'Benevolent का अर्थ है दयालु और उदार। Malevolent इसका विपरीत है - हानि की इच्छा।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-en-sa-003',
                  text: 'Choose the synonym of "ELOQUENT"',
                  textHi: '"ELOQUENT" का पर्यायवाची चुनें',
                  options: ['Articulate', 'Silent', 'Mute', 'Quiet'],
                  optionsHi: ['स्पष्टवादी', 'मूक', 'गूंगा', 'शांत'],
                  correctAnswer: 0,
                  explanation: 'Eloquent means fluent and persuasive in speech; articulate.',
                  explanationHi: 'Eloquent का अर्थ है भाषण में प्रवाहमय और प्रेरक; स्पष्टवादी।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-en-sa-004',
                  text: 'Choose the antonym of "AUTHENTIC"',
                  textHi: '"AUTHENTIC" का विलोम चुनें',
                  options: ['Fake', 'Genuine', 'Real', 'Original'],
                  optionsHi: ['नकली', 'असली', 'वास्तविक', 'मूल'],
                  correctAnswer: 0,
                  explanation: 'Authentic means genuine or real. Fake is the opposite.',
                  explanationHi: 'Authentic का अर्थ है असली या वास्तविक। Fake इसका विपरीत है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-en-sa-005',
                  text: 'Choose the word similar in meaning to "DILIGENT"',
                  textHi: '"DILIGENT" के समान अर्थ वाला शब्द चुनें',
                  options: ['Hardworking', 'Lazy', 'Careless', 'Negligent'],
                  optionsHi: ['मेहनती', 'आलसी', 'लापरवाह', 'उपेक्षित'],
                  correctAnswer: 0,
                  explanation: 'Diligent means showing care and effort in work; hardworking.',
                  explanationHi: 'Diligent का अर्थ है काम में सावधानी और प्रयास दिखाना; मेहनती।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-en-sa-006',
                  text: 'Choose the antonym of "COURAGEOUS"',
                  textHi: '"COURAGEOUS" का विलोम चुनें',
                  options: ['Cowardly', 'Brave', 'Bold', 'Fearless'],
                  optionsHi: ['कायर', 'बहादुर', 'निडर', 'निर्भय'],
                  correctAnswer: 0,
                  explanation: 'Courageous means brave. Cowardly is the opposite.',
                  explanationHi: 'Courageous का अर्थ है बहादुर। Cowardly इसका विपरीत है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-en-sa-007',
                  text: 'Choose the synonym of "INEVITABLE"',
                  textHi: '"INEVITABLE" का पर्यायवाची चुनें',
                  options: ['Unavoidable', 'Avoidable', 'Preventable', 'Escapable'],
                  optionsHi: ['अनिवार्य', 'टाल सकने योग्य', 'रोका जा सकने वाला', 'बचने योग्य'],
                  correctAnswer: 0,
                  explanation: 'Inevitable means certain to happen; unavoidable.',
                  explanationHi: 'Inevitable का अर्थ है निश्चित रूप से होने वाला; अनिवार्य।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-en-sa-008',
                  text: 'Choose the word opposite to "HOSTILE"',
                  textHi: '"HOSTILE" के विपरीत शब्द चुनें',
                  options: ['Friendly', 'Aggressive', 'Unfriendly', 'Antagonistic'],
                  optionsHi: ['मित्रवत', 'आक्रामक', 'शत्रुतापूर्ण', 'विरोधी'],
                  correctAnswer: 0,
                  explanation: 'Hostile means unfriendly. Friendly is the opposite.',
                  explanationHi: 'Hostile का अर्थ है शत्रुतापूर्ण। Friendly इसका विपरीत है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-en-sa-009',
                  text: 'Choose the synonym of "PROFOUND"',
                  textHi: '"PROFOUND" का पर्यायवाची चुनें',
                  options: ['Deep', 'Shallow', 'Superficial', 'Light'],
                  optionsHi: ['गहरा', 'उथला', 'सतही', 'हल्का'],
                  correctAnswer: 0,
                  explanation: 'Profound means very great or intense; deep.',
                  explanationHi: 'Profound का अर्थ है बहुत महान या तीव्र; गहरा।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-en-sa-010',
                  text: 'Choose the antonym of "TRANQUIL"',
                  textHi: '"TRANQUIL" का विलोम चुनें',
                  options: ['Turbulent', 'Peaceful', 'Calm', 'Serene'],
                  optionsHi: ['अशांत', 'शांतिपूर्ण', 'शांत', 'प्रशांत'],
                  correctAnswer: 0,
                  explanation: 'Tranquil means calm and peaceful. Turbulent is the opposite.',
                  explanationHi: 'Tranquil का अर्थ है शांत और शांतिपूर्ण। Turbulent इसका विपरीत है।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-en-sa-011',
                  text: 'Choose the word similar to "METICULOUS"',
                  textHi: '"METICULOUS" के समान शब्द चुनें',
                  options: ['Careful', 'Careless', 'Hasty', 'Sloppy'],
                  optionsHi: ['सावधान', 'लापरवाह', 'जल्दबाज', 'बेढंग'],
                  correctAnswer: 0,
                  explanation: 'Meticulous means showing great attention to detail; careful.',
                  explanationHi: 'Meticulous का अर्थ है विस्तार पर बहुत ध्यान देना; सावधान।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-en-sa-012',
                  text: 'Choose the antonym of "OPAQUE"',
                  textHi: '"OPAQUE" का विलोम चुनें',
                  options: ['Transparent', 'Dark', 'Cloudy', 'Dim'],
                  optionsHi: ['पारदर्शी', 'अंधेरा', 'धुंधला', 'मद्धम'],
                  correctAnswer: 0,
                  explanation: 'Opaque means not able to see through. Transparent is the opposite.',
                  explanationHi: 'Opaque का अर्थ है जिससे देखा न जा सके। Transparent इसका विपरीत है।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-en-sa-013',
                  text: 'Choose the synonym of "PRUDENT"',
                  textHi: '"PRUDENT" का पर्यायवाची चुनें',
                  options: ['Wise', 'Foolish', 'Reckless', 'Careless'],
                  optionsHi: ['बुद्धिमान', 'मूर्ख', 'लापरवाह', 'असावधान'],
                  correctAnswer: 0,
                  explanation: 'Prudent means acting with care and thought; wise.',
                  explanationHi: 'Prudent का अर्थ है सावधानी और विचार से कार्य करना; बुद्धिमान।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-en-sa-014',
                  text: 'Choose the word opposite to "VERBOSE"',
                  textHi: '"VERBOSE" के विपरीत शब्द चुनें',
                  options: ['Concise', 'Wordy', 'Lengthy', 'Long-winded'],
                  optionsHi: ['संक्षिप्त', 'शब्दाडंबरपूर्ण', 'लंबा', 'वाचाल'],
                  correctAnswer: 0,
                  explanation: 'Verbose means using more words than needed. Concise is the opposite.',
                  explanationHi: 'Verbose का अर्थ है आवश्यकता से अधिक शब्दों का प्रयोग। Concise इसका विपरीत है।',
                  difficulty: 'hard',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-en-sa-015',
                  text: 'Choose the synonym of "ALLEVIATE"',
                  textHi: '"ALLEVIATE" का पर्यायवाची चुनें',
                  options: ['Relieve', 'Worsen', 'Aggravate', 'Intensify'],
                  optionsHi: ['राहत देना', 'बिगाड़ना', 'बढ़ाना', 'तीव्र करना'],
                  correctAnswer: 0,
                  explanation: 'Alleviate means to make suffering less severe; relieve.',
                  explanationHi: 'Alleviate का अर्थ है पीड़ा को कम करना; राहत देना।',
                  difficulty: 'hard',
                  year: 'SSC CGL 2020'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'general-awareness',
      name: 'General Awareness',
      nameHi: 'सामान्य जागरूकता',
      icon: 'Globe',
      color: '#F59E0B',
      topics: [
        {
          id: 'indian-polity',
          name: 'Indian Polity',
          nameHi: 'भारतीय राजव्यवस्था',
          chapters: [
            {
              id: 'constitution-basics',
              name: 'Constitution Basics',
              nameHi: 'संविधान की मूल बातें',
              difficulty: 'medium',
              questions: [
                {
                  id: 'ssc-ga-ip-001',
                  text: 'The Constitution of India came into effect on:',
                  textHi: 'भारत का संविधान किस तिथि को लागू हुआ:',
                  options: ['26 January 1950', '15 August 1947', '26 November 1949', '26 January 1947'],
                  optionsHi: ['26 जनवरी 1950', '15 अगस्त 1947', '26 नवंबर 1949', '26 जनवरी 1947'],
                  correctAnswer: 0,
                  explanation: 'The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950.',
                  explanationHi: 'संविधान को 26 नवंबर 1949 को अपनाया गया और यह 26 जनवरी 1950 को लागू हुआ।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-ga-ip-002',
                  text: 'Who is known as the "Father of the Indian Constitution"?',
                  textHi: 'भारतीय संविधान का जनक किसे कहा जाता है?',
                  options: ['Dr. B.R. Ambedkar', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel'],
                  optionsHi: ['डॉ. बी.आर. अंबेडकर', 'महात्मा गांधी', 'जवाहरलाल नेहरू', 'सरदार पटेल'],
                  correctAnswer: 0,
                  explanation: 'Dr. B.R. Ambedkar was the chairman of the Drafting Committee and is called the Father of Indian Constitution.',
                  explanationHi: 'डॉ. बी.आर. अंबेडकर प्रारूप समिति के अध्यक्ष थे और उन्हें भारतीय संविधान का जनक कहा जाता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-ga-ip-003',
                  text: 'How many articles were there in the original Constitution of India?',
                  textHi: 'भारत के मूल संविधान में कितने अनुच्छेद थे?',
                  options: ['395', '370', '400', '385'],
                  optionsHi: ['395', '370', '400', '385'],
                  correctAnswer: 0,
                  explanation: 'The original Constitution had 395 articles in 22 parts and 8 schedules.',
                  explanationHi: 'मूल संविधान में 22 भागों और 8 अनुसूचियों में 395 अनुच्छेद थे।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-ga-ip-004',
                  text: 'The Preamble to the Constitution declares India as:',
                  textHi: 'संविधान की प्रस्तावना भारत को किस रूप में घोषित करती है:',
                  options: ['Sovereign Socialist Secular Democratic Republic', 'Socialist Secular Republic', 'Democratic Republic', 'Sovereign Democratic Republic'],
                  optionsHi: ['संप्रभु समाजवादी धर्मनिरपेक्ष लोकतांत्रिक गणराज्य', 'समाजवादी धर्मनिरपेक्ष गणराज्य', 'लोकतांत्रिक गणराज्य', 'संप्रभु लोकतांत्रिक गणराज्य'],
                  correctAnswer: 0,
                  explanation: 'The 42nd Amendment (1976) added "Socialist" and "Secular" to the Preamble.',
                  explanationHi: '42वें संशोधन (1976) ने प्रस्तावना में "समाजवादी" और "धर्मनिरपेक्ष" जोड़ा।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-ga-ip-005',
                  text: 'The Fundamental Rights are contained in which part of the Constitution?',
                  textHi: 'मौलिक अधिकार संविधान के किस भाग में हैं?',
                  options: ['Part III', 'Part IV', 'Part II', 'Part V'],
                  optionsHi: ['भाग III', 'भाग IV', 'भाग II', 'भाग V'],
                  correctAnswer: 0,
                  explanation: 'Fundamental Rights are contained in Part III (Articles 12-35).',
                  explanationHi: 'मौलिक अधिकार भाग III (अनुच्छेद 12-35) में हैं।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-ga-ip-006',
                  text: 'The minimum age to become the President of India is:',
                  textHi: 'भारत का राष्ट्रपति बनने की न्यूनतम आयु है:',
                  options: ['35 years', '30 years', '25 years', '40 years'],
                  optionsHi: ['35 वर्ष', '30 वर्ष', '25 वर्ष', '40 वर्ष'],
                  correctAnswer: 0,
                  explanation: 'Article 58 specifies that the President must be at least 35 years of age.',
                  explanationHi: 'अनुच्छेद 58 निर्दिष्ट करता है कि राष्ट्रपति की आयु कम से कम 35 वर्ष होनी चाहिए।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-ga-ip-007',
                  text: 'The Rajya Sabha can have a maximum of how many members?',
                  textHi: 'राज्यसभा में अधिकतम कितने सदस्य हो सकते हैं?',
                  options: ['250', '245', '240', '255'],
                  optionsHi: ['250', '245', '240', '255'],
                  correctAnswer: 0,
                  explanation: 'Article 80 states that Rajya Sabha can have maximum 250 members (238 elected + 12 nominated).',
                  explanationHi: 'अनुच्छेद 80 में कहा गया है कि राज्यसभा में अधिकतम 250 सदस्य हो सकते हैं (238 निर्वाचित + 12 मनोनीत)।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-ga-ip-008',
                  text: 'Which Article deals with the Right to Constitutional Remedies?',
                  textHi: 'संवैधानिक उपचारों का अधिकार किस अनुच्छेद में है?',
                  options: ['Article 32', 'Article 21', 'Article 14', 'Article 19'],
                  optionsHi: ['अनुच्छेद 32', 'अनुच्छेद 21', 'अनुच्छेद 14', 'अनुच्छेद 19'],
                  correctAnswer: 0,
                  explanation: 'Article 32 gives the Right to Constitutional Remedies. Dr. Ambedkar called it the "heart and soul" of the Constitution.',
                  explanationHi: 'अनुच्छेद 32 संवैधानिक उपचारों का अधिकार देता है। डॉ. अंबेडकर ने इसे संविधान की "आत्मा" कहा था।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-ga-ip-009',
                  text: 'The Directive Principles of State Policy are contained in:',
                  textHi: 'राज्य की नीति के निदेशक तत्व किस भाग में हैं:',
                  options: ['Part IV', 'Part III', 'Part V', 'Part VI'],
                  optionsHi: ['भाग IV', 'भाग III', 'भाग V', 'भाग VI'],
                  correctAnswer: 0,
                  explanation: 'Directive Principles are in Part IV (Articles 36-51).',
                  explanationHi: 'निदेशक तत्व भाग IV (अनुच्छेद 36-51) में हैं।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-ga-ip-010',
                  text: 'Who appoints the Chief Justice of India?',
                  textHi: 'भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?',
                  options: ['President', 'Prime Minister', 'Parliament', 'Vice President'],
                  optionsHi: ['राष्ट्रपति', 'प्रधानमंत्री', 'संसद', 'उपराष्ट्रपति'],
                  correctAnswer: 0,
                  explanation: 'Under Article 124, the President appoints the CJI after consultation with judges.',
                  explanationHi: 'अनुच्छेद 124 के तहत, राष्ट्रपति न्यायाधीशों से परामर्श के बाद CJI की नियुक्ति करता है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-ga-ip-011',
                  text: 'The term of Lok Sabha is:',
                  textHi: 'लोकसभा का कार्यकाल है:',
                  options: ['5 years', '6 years', '4 years', 'Permanent'],
                  optionsHi: ['5 वर्ष', '6 वर्ष', '4 वर्ष', 'स्थायी'],
                  correctAnswer: 0,
                  explanation: 'The normal term of Lok Sabha is 5 years from its first meeting.',
                  explanationHi: 'लोकसभा का सामान्य कार्यकाल उसकी पहली बैठक से 5 वर्ष है।',
                  difficulty: 'easy',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-ga-ip-012',
                  text: 'Which Amendment is known as the "Mini Constitution"?',
                  textHi: 'किस संशोधन को "लघु संविधान" कहा जाता है?',
                  options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '74th Amendment'],
                  optionsHi: ['42वां संशोधन', '44वां संशोधन', '73वां संशोधन', '74वां संशोधन'],
                  correctAnswer: 0,
                  explanation: 'The 42nd Amendment (1976) made sweeping changes and is called Mini Constitution.',
                  explanationHi: '42वें संशोधन (1976) ने व्यापक परिवर्तन किए और इसे लघु संविधान कहा जाता है।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2020'
                },
                {
                  id: 'ssc-ga-ip-013',
                  text: 'How many Fundamental Duties are mentioned in the Constitution?',
                  textHi: 'संविधान में कितने मौलिक कर्तव्य उल्लेखित हैं?',
                  options: ['11', '10', '12', '9'],
                  optionsHi: ['11', '10', '12', '9'],
                  correctAnswer: 0,
                  explanation: 'Originally 10 duties were added by 42nd Amendment. 11th duty (education for children) was added by 86th Amendment.',
                  explanationHi: 'मूल रूप से 42वें संशोधन द्वारा 10 कर्तव्य जोड़े गए। 11वां कर्तव्य 86वें संशोधन द्वारा जोड़ा गया।',
                  difficulty: 'medium',
                  year: 'SSC CGL 2019'
                },
                {
                  id: 'ssc-ga-ip-014',
                  text: 'The "Instrument of Instructions" in the Constitution was borrowed from:',
                  textHi: 'संविधान में "निदेश का साधन" किससे लिया गया है:',
                  options: ['Government of India Act 1935', 'US Constitution', 'British Constitution', 'Irish Constitution'],
                  optionsHi: ['भारत सरकार अधिनियम 1935', 'अमेरिकी संविधान', 'ब्रिटिश संविधान', 'आयरिश संविधान'],
                  correctAnswer: 0,
                  explanation: 'The Directive Principles are based on Instrument of Instructions from GOI Act 1935.',
                  explanationHi: 'निदेशक तत्व भारत सरकार अधिनियम 1935 के निदेश के साधन पर आधारित हैं।',
                  difficulty: 'hard',
                  year: 'SSC CGL 2018'
                },
                {
                  id: 'ssc-ga-ip-015',
                  text: 'Which Article provides for the establishment of Finance Commission?',
                  textHi: 'वित्त आयोग की स्थापना किस अनुच्छेद में है?',
                  options: ['Article 280', 'Article 270', 'Article 275', 'Article 285'],
                  optionsHi: ['अनुच्छेद 280', 'अनुच्छेद 270', 'अनुच्छेद 275', 'अनुच्छेद 285'],
                  correctAnswer: 0,
                  explanation: 'Article 280 provides for the establishment of Finance Commission every 5 years.',
                  explanationHi: 'अनुच्छेद 280 हर 5 वर्ष में वित्त आयोग की स्थापना का प्रावधान करता है।',
                  difficulty: 'hard',
                  year: 'SSC CGL 2020'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
