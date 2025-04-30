export async function fetchBlogPosts() {
  // Simulerad delay på 1 sekund
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    data: [
      {
        id: 1,
        title: "Första inlägget",
        content: "Det här är en kort beskrivning av inlägget. Vi är glada att kunna lansera vår blogg där vi kommer att dela insikter, nyheter och tankar om teknik, innovation och hållbarhet. Häng med oss på denna resa och upptäck hur vi kan skapa en bättre framtid tillsammans. Teknikens roll i samhället har aldrig varit viktigare, och vi vill vara en del av samtalet om hur vi kan använda innovation för att lösa några av världens största utmaningar. Genom att dela våra erfarenheter och idéer hoppas vi kunna inspirera andra att tänka kreativt och agera för en bättre morgondag. Vi kommer att täcka ämnen som sträcker sig från artificiell intelligens och maskininlärning till hållbar utveckling och digital transformation. Vårt mål är att skapa en plattform där vi kan diskutera idéer och dela kunskap som kan göra skillnad. Vi ser fram emot att höra dina tankar och idéer också, så tveka inte att dela med dig i kommentarerna. Tillsammans kan vi skapa en dialog som leder till verklig förändring.",
        image: "https://picsum.photos/200/300?random=1",
        date: "2025-04-14",
      },
      {
        id: 2,
        title: "Nästa artikel",
        content: "En introduktion till vår nästa bloggpost. Vi kommer att dyka djupare in i ämnen som påverkar vår vardag och framtid. Vårt mål är att inspirera och informera genom att dela kunskap och erfarenheter från olika områden inom teknik och innovation. I denna artikel kommer vi att utforska hur tekniska framsteg påverkar våra liv och vilka möjligheter de skapar för framtiden. Vi kommer också att diskutera de utmaningar som följer med dessa framsteg och hur vi kan övervinna dem. Genom att förstå de krafter som driver teknisk utveckling kan vi bättre förbereda oss för att möta framtidens krav. Vi hoppas att denna artikel kommer att ge dig nya insikter och inspirera dig att tänka på hur du kan använda teknik för att förbättra ditt eget liv och samhället som helhet. Håll utkik efter fler artiklar där vi fortsätter att utforska dessa spännande ämnen.",
        image: "https://picsum.photos/200/300?random=2",
        date: "2025-04-10",
      },
      {
        id: 3,
        title: "Teknikens framtid",
        content: "Utforska hur teknik påverkar vår vardag. Från artificiell intelligens till smarta hem, tekniken utvecklas i en rasande takt. Vi diskuterar hur dessa framsteg kan förbättra våra liv och vilka utmaningar vi står inför när vi anpassar oss till en alltmer digital värld. Teknikens framtid är ett ämne som berör oss alla, och det är viktigt att vi förstår hur vi kan använda den på ett sätt som gynnar både individer och samhällen. I denna artikel kommer vi att titta på några av de mest spännande tekniska innovationerna som är på väg att förändra världen. Vi kommer också att diskutera de etiska och sociala frågor som uppstår i samband med dessa framsteg. Genom att förstå dessa frågor kan vi bättre navigera i en värld som ständigt förändras av teknik. Vi hoppas att denna artikel kommer att ge dig en djupare förståelse för teknikens roll i våra liv och inspirera dig att tänka på hur du kan använda den för att göra en positiv skillnad.",
        image: "https://picsum.photos/200/300?random=3",
        date: "2025-04-08",
      },
      {
        id: 4,
        title: "Hållbar teknik",
        content: "Hållbarhet är en av de viktigaste frågorna i vår tid, och teknik spelar en avgörande roll i att skapa en mer hållbar framtid. I denna artikel kommer vi att utforska hur tekniska innovationer kan bidra till att minska vår miljöpåverkan och skapa en mer hållbar värld. Vi kommer att titta på exempel som förnybar energi, energieffektiva lösningar och cirkulär ekonomi. Genom att använda teknik på ett smart och ansvarsfullt sätt kan vi skapa lösningar som inte bara är bra för miljön utan också för ekonomin och samhället som helhet. Vi hoppas att denna artikel kommer att inspirera dig att tänka på hur du kan använda teknik för att göra en positiv skillnad i världen.",
        image: "https://picsum.photos/200/300?random=4",
        date: "2025-04-06",
      },
      {
        id: 5,
        title: "Digital transformation",
        content: "Digital transformation är en process som påverkar alla aspekter av våra liv, från hur vi arbetar och kommunicerar till hur vi handlar och underhåller oss. I denna artikel kommer vi att utforska vad digital transformation innebär och hur den påverkar företag, organisationer och individer. Vi kommer att titta på exempel på framgångsrika digitala transformationer och diskutera de utmaningar som följer med denna förändring. Genom att förstå digital transformation kan vi bättre förbereda oss för att möta framtidens krav och möjligheter.",
        image: "https://picsum.photos/200/300?random=5",
        date: "2025-04-04",
      },
      {
        id: 6,
        title: "Artificiell intelligens",
        content: "Artificiell intelligens (AI) är en av de mest spännande och omvälvande teknologierna i vår tid. I denna artikel kommer vi att utforska vad AI är, hur det fungerar och vilka möjligheter det skapar för framtiden. Vi kommer också att diskutera de etiska och sociala frågor som uppstår i samband med AI och hur vi kan använda denna teknik på ett ansvarsfullt sätt. Genom att förstå AI kan vi bättre förbereda oss för att möta de utmaningar och möjligheter som denna teknik medför.",
        image: "https://picsum.photos/200/300?random=6",
        date: "2025-04-02",
      },
      {
        id: 7,
        title: "Framtidens arbetsplats",
        content: "Hur kommer framtidens arbetsplats att se ut? I denna artikel kommer vi att utforska hur teknik förändrar sättet vi arbetar på och vilka möjligheter och utmaningar detta skapar. Vi kommer att titta på exempel som distansarbete, automatisering och digitala verktyg som underlättar samarbete och produktivitet. Genom att förstå dessa förändringar kan vi bättre förbereda oss för att möta framtidens arbetsliv och skapa en arbetsplats som är både effektiv och hållbar.",
        image: "https://picsum.photos/200/300?random=7",
        date: "2025-03-30",
      },
      {
        id: 8,
        title: "Innovation och kreativitet",
        content: "Innovation och kreativitet är nyckeln till framgång i en snabbt föränderlig värld. I denna artikel kommer vi att utforska hur vi kan främja innovation och kreativitet genom att använda teknik på ett smart och ansvarsfullt sätt. Vi kommer att titta på exempel på framgångsrika innovationer och diskutera hur vi kan skapa en kultur som uppmuntrar till nytänkande och experimenterande. Genom att förstå hur innovation och kreativitet fungerar kan vi bättre förbereda oss för att möta framtidens utmaningar och möjligheter.",
        image: "https://picsum.photos/200/300?random=8",
        date: "2025-03-28",
      },
      {
        id: 9,
        title: "Teknik och utbildning",
        content: "Teknik har en enorm potential att förändra hur vi lär oss och undervisar. I denna artikel kommer vi att utforska hur tekniska verktyg och plattformar kan användas för att förbättra utbildning och lärande. Vi kommer att titta på exempel som onlinekurser, interaktiva läromedel och AI-drivna utbildningsverktyg. Genom att förstå hur teknik kan användas inom utbildning kan vi skapa en framtid där lärande är mer tillgängligt, effektivt och engagerande för alla.",
        image: "https://picsum.photos/200/300?random=9",
        date: "2025-03-26",
      },
      {
        id: 10,
        title: "Framtidens städer",
        content: "Hur kommer framtidens städer att se ut? I denna artikel kommer vi att utforska hur teknik kan användas för att skapa smarta och hållbara städer. Vi kommer att titta på exempel som smarta transportsystem, energieffektiva byggnader och digitala tjänster som underlättar vardagen för invånarna. Genom att förstå hur teknik kan användas för att förbättra våra städer kan vi skapa en framtid där städer är mer hållbara, effektiva och trevliga att leva i.",
        image: "https://picsum.photos/200/300?random=10",
        date: "2025-03-24",
      },
    ],
  };
}
