// variables

 var link=document.querySelectorAll(".lang a")
  var lang=document.querySelector(".lang")
  var title=document.querySelector(".title")
  var description=document.querySelector(".info__text")
  var home=document.querySelector("#home")
  var about=document.querySelector("#about")
  var contact=document.querySelector("#contact")
  var linkAb=document.querySelectorAll(".lang__about a")
  var textabout=document.querySelector(".info__about")
  var linkcontact=document.querySelectorAll("#lang__contact a")
  var titlecontact=document.querySelector(".title__contact")
  var email=document.querySelector("#email")
  var tel=document.querySelector("#tel")
  var tational=document.querySelector("#national")
  var toggle=document.querySelector(".toggle")

// ///index.html

 var data={
     "armenian":{
         "title":"Վերնագիր",
         "description":"Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները:Lorem Ipsum- ը պարզապես տպագրական և տպագրական արդյունաբերության կեղծ տեքստ է: Lorem Ipsum- ը արդյունաբերության ստանդարտ կեղծ տեքստն է եղել 1500-ականներից ի վեր, երբ անհայտ տպիչը վերցրեց տիպի պարկուճը և խառնեց այն ՝ պատրաստելու համար տիպային նմուշների գիրք: Այն գոյատևել է ոչ միայն հինգ դար, այլև թռիչք դեպի էլեկտրոնային ձևագրում ՝ մնալով էապես անփոփոխ: Այն մասսայականացվել է 1960-ականներին ՝ Lorem Ipsum հատվածներ պարունակող Letraset թերթերի թողարկմամբ, իսկ վերջերս ՝ Aldus PageMaker- ի նման աշխատասեղանի հրատարակչական ծրագրերով, ներառյալ Lorem Ipsum- ի տարբերակները: ",
         "home":"Գլխավոր էջ",
         "about":"Մեր մասին",
         "contact":"Կոնտակտ",    },
     "english":{
         "title":"Description",
         "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
         "home":"HOME",
         "about":"ABOUT",
         "contact":"CONTACT",     
     },
     "russian":{
         "title":"Заглавие:",
         "description":"Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а в последнее время - с помощью программного обеспечения для настольных издательских систем, такого как Aldus PageMaker, включая версии Lorem Ipsum.",
         "home":"Домашняя страница",
         "about":" О странице",
         "contact":"контакт",    
     },
    

     
    }
 
 link.forEach(el=>{
     el.addEventListener("click",()=>{   
         var attr=el.getAttribute('language')    
         title.textContent=data[attr].title
         description.textContent=data[attr].description
         home.textContent=data[attr].home
         about.textContent=data[attr].about
         contact.textContent=data[attr].contact      
     })
 })




///about.html



var data__about={
   "armenian__ab":{
       "textabout":"Lorem ipsum գազարն ուժեղացրեց զեղչերը: Վիշտի արժանի այն փաստից, որ հեշտ է մեղադրել, որով ընտրելը: Այնքա blindն կույր, դժվարություններ և տառապանքներ ձեռք բերելով մեզ համար: Truthշմարտության ապահովում  Այնտեղ, ըստ էության, չկա վիշտ, նշանակում և ընտրություն ՝ նրան հետևելու համար ՝ հեռու մնալով գցվելու արժանի մի բան անելու հաճույքից: Դա միանգամից օգտվում է ավելի մեծի հաճույքից, որքան մոտ է մտքի theավը հաճելի է վճարել իր բաները, ես կգամ նրա հետ, որ գամ:Lorem ipsum գազարն ուժեղացրեց զեղչերը: Վիշտի արժանի այն փաստից, որ հեշտ է մեղադրել, որով ընտրելը: Այնքա blindն կույր, դժվարություններ և տառապանքներ ձեռք բերելով մեզ համար: Truthշմարտության ապահովում  Այնտեղ, ըստ էության, չկա վիշտ, նշանակում և ընտրություն ՝ նրան հետևելու համար ՝ հեռու մնալով գցվելու արժանի մի բան անելու հաճույքից: Դա միանգամից օգտվում է ավելի մեծի հաճույքից, որքան մոտ է մտքի theավը հաճելի է վճարել իր բաները, ես կգամ նրա հետ, որ գամ:",
       "home":"Գլխավոր էջ",
       "about":"Մեր մասին",
       "contact":"Կոնտակտ",
     
   },
   "english__ab":{
  
       "textabout":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos facilis culpa ab eligendi quas sit dolorem ex. Obcaecati itaque, veniam consequatur laborum perferendis nobis! Veritatis animi provident ipsum explicabo!       Est, ipsam nulla neque dolorum, atque delectus sequi, fugiat voluptas aliquid repellendus dignissimos facere. Dolor animi placeat commodi maiores quod quo minus sit assumenda voluptas rerum pariatur, veniam illo autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos facilis culpa ab eligendi quas sit dolorem ex. Obcaecati itaque, veniam consequatur laborum perferendis nobis! Veritatis animi provident ipsum explicabo!       Est, ipsam nulla neque dolorum, atque delectus sequi, fugiat voluptas aliquid repellendus dignissimos facere. Dolor animi placeat commodi maiores quod quo minus sit assumenda voluptas rerum pariatur, veniam illo autem.",
       "home":"HOME",
       "about":"ABOUT",
       "contact":"CONTACT",
     
   },
   "russian__ab":{
      
       "textabout":"Lorem ipsum морковь с усиленными скидками. Достойно огорчения от того, что легко винить из-за чего выбирать. Такие слепые, терпящие за нас невзгоды и страдания! Предоставление истины, которая развернется! По сути, здесь нет ни печали, ни назначения, ни избрания, чтобы следовать за ним, вдали от удовольствия сделать что-то достойное быть брошенным. Это тотчас же воспользоваться удовольствием большего, чем ближе Боль ума приятна в своих вещах, чтобы заплатить, я пойду с ним, пойду. Lorem ipsum морковь с усиленными скидками. Достойно огорчения от того, что легко винить из-за чего выбирать. Такие слепые, терпящие за нас невзгоды и страдания! Предоставление истины, которая развернется!  По сути, здесь нет ни печали, ни назначения, ни избрания, чтобы следовать за ним, вдали от удовольствия сделать что-то достойное быть брошенным. Это тотчас же воспользоваться удовольствием большего, чем ближе Боль ума приятна в своих вещах, чтобы заплатить, я пойду с ним, пойду. ",
       "home":"Домашняя страница",
       "about":" О странице",
       "contact":"контакт",
       
       
   
  }
}


linkAb.forEach(el=>{
    el.addEventListener("click",()=>{   

        var attr=el.getAttribute('language')    
       
         textabout.textContent=data__about[attr].textabout
         textabout.style.margin="50px"
        home.textContent=data__about[attr].home
        about.textContent=data__about[attr].about
        contact.textContent=data__about[attr].contact
        
    })
})



//contact.html



var data__contact={
    "english__cont":{
        "title":"CONTACT INFORMATION",
        "email":"email: mkrtchyangurgen8@mail.ru",
        "tel":"phone: 098867865",
        "national":"national: ARMENYA",
        "home":"HOME",
        "about":"ABOUT",
        "contact":"CONTACT",

    },
    "russian__cont":{
        "title":"КОНТАКТНИЕ ДАННИЕ",
        "email":"ел. почта: mkrtchyangurgen8@mail.ru",
        "tel":"телефон: 098867865",
        "national":"националность: АРМЯН ",
        "home":"Домашняя страница",
        "about":" О странице",
        "contact":"контакт",
  

    },
    "armenian__cont":{
        "title":"ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ",
        "email":"էլ.հասցե: mkrtchyangurgen8@mail.ru",
        "tel":"հեռախոս: 098867865",
        "national":"ազգություն: ՀԱՅ",
        "home":"Գլխավոր էջ",
        "about":"Մեր մասին",
        "contact":"Կոնտակտ",


    }
}


linkcontact.forEach(el=>{
    el.addEventListener("click",()=>{   
        var attr=el.getAttribute('language')    
        titlecontact.textContent=data__contact[attr].title
        email.textContent=data__contact[attr].email
        tel.textContent=data__contact[attr].tel
        national.textContent=data__contact[attr].national
        home.textContent=data__contact[attr].home
        about.textContent=data__contact[attr].about
        contact.textContent=data__contact[attr].contact      
    })
})



//lang menu open



toggle.addEventListener("click",function (){
  $(lang).slideToggle()
 

})