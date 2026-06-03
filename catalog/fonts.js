/* ===== Font Library catalog — single source of truth for fontbook.html =====
   Add a font: append an object + drop its files in library/<slug>/.
   This file is loaded via <script src> so it works over file:// and http:// alike. */
window.SAMPLES = {
  he: 'אבגד אבגד 123',
  heLong: 'דג סקרן שט בים מאוכזב ולפתע מצא חברה',
  en: 'The quick brown fox 123',
  enLong: 'The quick brown fox jumps over the lazy dog 1234567890'
};
const H = window.SAMPLES.heLong, E = window.SAMPLES.enLong;
window.FONTS = [
  { slug:'rubik', he:'רוביק', en:'Rubik', heb:true, brand:true, designer:'Hubert & Fischer · עברית Meir Sadan',
    cat:'sans', catHe:'Sans', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'פונט המותג של אוריה. כותרות Black, גוף Regular. ברירת מחדל לוורד וגאנטים.', mood:'גיאומטרי · ידידותי · עכשווי',
    source:'Google Fonts', path:'library/rubik/', pairs:'Plus Jakarta Sans', sample:H,
    weights:[{n:'Light',w:300,f:'Rubik-Light.ttf'},{n:'Regular',w:400,f:'Rubik-Regular.ttf'},{n:'Medium',w:500,f:'Rubik-Medium.ttf'},{n:'Bold',w:700,f:'Rubik-Bold.ttf'},{n:'Black',w:900,f:'Rubik-Black.ttf'}] },

  { slug:'plus-jakarta-sans', he:'פלוס ג׳קרטה סאנס', en:'Plus Jakarta Sans', heb:false, brand:true, variable:true, designer:'Tokotype',
    cat:'sans', catHe:'Sans', scripts:'לטינית · ספרות בלבד', license:'OFL 1.1', free:true,
    use:'פונט המותג לאנגלית. כותרות 800, גוף 500, תוויות 700. לא תומך עברית.', mood:'מודרני · נקי · בינלאומי',
    source:'Google Fonts', path:'library/plus-jakarta-sans/', pairs:'רוביק', sample:E,
    weights:[{n:'ExtraLight',w:200,f:'PlusJakartaSans-VariableFont_wght.ttf'},{n:'Regular',w:400,f:'PlusJakartaSans-VariableFont_wght.ttf'},{n:'Medium',w:500,f:'PlusJakartaSans-VariableFont_wght.ttf'},{n:'Bold',w:700,f:'PlusJakartaSans-VariableFont_wght.ttf'},{n:'ExtraBold',w:800,f:'PlusJakartaSans-VariableFont_wght.ttf'}] },

  { slug:'heebo', he:'היבו', en:'Heebo', heb:true, designer:'Oded Ezer · The Heebo Project',
    cat:'sans', catHe:'Sans', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'גוף טקסט, ממשקים, כתוביות וידאו, כותרות נקיות. סוס-עבודה רב-תכליתי.', mood:'נקי · מודרני · ניטרלי',
    source:'Google Fonts', path:'library/heebo/', pairs:'פרנק ריהל ליבר', sample:H,
    weights:[{n:'Thin',w:100,f:'Heebo-Thin.ttf'},{n:'Light',w:300,f:'Heebo-Light.ttf'},{n:'Regular',w:400,f:'Heebo-Regular.ttf'},{n:'Medium',w:500,f:'Heebo-Medium.ttf'},{n:'Bold',w:700,f:'Heebo-Bold.ttf'},{n:'ExtraBold',w:800,f:'Heebo-ExtraBold.ttf'},{n:'Black',w:900,f:'Heebo-Black.ttf'}] },

  { slug:'assistant', he:'אסיסטנט', en:'Assistant', heb:true, designer:'Ben Nathan',
    cat:'sans', catHe:'Sans', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'ממשקים, אתרים, גוף טקסט קריא. אלטרנטיבה רחבת-משקלים להיבו.', mood:'נקי · עכשווי · קריא',
    source:'Google Fonts', path:'library/assistant/', pairs:'פרנק ריהל ליבר', sample:H,
    weights:[{n:'ExtraLight',w:200,f:'Assistant-ExtraLight.ttf'},{n:'Light',w:300,f:'Assistant-Light.ttf'},{n:'Regular',w:400,f:'Assistant-Regular.ttf'},{n:'SemiBold',w:600,f:'Assistant-SemiBold.ttf'},{n:'Bold',w:700,f:'Assistant-Bold.ttf'},{n:'ExtraBold',w:800,f:'Assistant-ExtraBold.ttf'}] },

  { slug:'alef', he:'אלף', en:'Alef', heb:true, designer:'HaGilda & Mushon Zer-Aviv',
    cat:'sans', catHe:'Sans', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'גוף טקסט וכותרות, תמיכה עברית טובה, ניטרלי ופונקציונלי.', mood:'ניטרלי · פונקציונלי · נקי',
    source:'Google Fonts', path:'library/alef/', pairs:'Suez One', sample:H,
    weights:[{n:'Regular',w:400,f:'Alef-regular.ttf'},{n:'Bold',w:700,f:'Alef-bold.ttf'}] },

  { slug:'varela-round', he:'וארלה ראונד', en:'Varela Round', heb:true, designer:'Joe Prince · עברית Eyal Holtzman',
    cat:'sans', catHe:'Sans', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'כותרות ידידותיות, באנרים, מותגים רכים, תוכן לילדים. פינות מעוגלות.', mood:'עגול · ידידותי · רך',
    source:'Google Fonts', path:'library/varela-round/', pairs:'רוביק', sample:H,
    weights:[{n:'Regular',w:400,f:'VarelaRound-Regular.ttf'}] },

  { slug:'secular-one', he:'סקולר וואן', en:'Secular One', heb:true, designer:'Oved Ben-Tov',
    cat:'display', catHe:'Display', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'כותרות ענק, פוסטרים, באנרים בולטים. משקל בודד כבד ופלקטי.', mood:'כבד · בולט · פלקטי',
    source:'Google Fonts', path:'library/secular-one/', pairs:'אסיסטנט', sample:H,
    weights:[{n:'Regular',w:400,f:'SecularOne-Regular.ttf'}] },

  { slug:'frank-ruhl-libre', he:'פרנק ריהל ליבר', en:'Frank Ruhl Libre', heb:true, designer:'Yanek Iontef',
    cat:'serif', catHe:'Serif', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'כותרות עיתונאיות, ספרים, מאמרים, תוכן ארוך. דפוס קלאסי ומכובד.', mood:'קלאסי · מכובד · עיתונאי',
    source:'Google Fonts', path:'library/frank-ruhl-libre/', pairs:'היבו', sample:H,
    weights:[{n:'Light',w:300,f:'FrankRuhlLibre-Light.ttf'},{n:'Regular',w:400,f:'FrankRuhlLibre-Regular.ttf'},{n:'Medium',w:500,f:'FrankRuhlLibre-Medium.ttf'},{n:'Bold',w:700,f:'FrankRuhlLibre-Bold.ttf'},{n:'Black',w:900,f:'FrankRuhlLibre-Black.ttf'}] },

  { slug:'david-libre', he:'דוד ליבר', en:'David Libre', heb:true, designer:'Yanek Iontef · על בסיס דוד של Friedlaender',
    cat:'serif', catHe:'Serif', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'גוף טקסט וכותרות, סריף ישראלי קלאסי וקריא מאוד.', mood:'קלאסי · ישראלי · קריא',
    source:'Google Fonts', path:'library/david-libre/', pairs:'אסיסטנט', sample:H,
    weights:[{n:'Regular',w:400,f:'DavidLibre-Regular.ttf'},{n:'Medium',w:500,f:'DavidLibre-Medium.ttf'},{n:'Bold',w:700,f:'DavidLibre-Bold.ttf'}] },

  { slug:'suez-one', he:'סואז וואן', en:'Suez One', heb:true, designer:'Oded Ezer · HFW',
    cat:'serif', catHe:'Serif', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'כותרות דרמטיות, ציטוטים, פוסטרים. סריף שמן ונוכח מאוד.', mood:'דרמטי · נוכח · עיתונאי',
    source:'Google Fonts', path:'library/suez-one/', pairs:'אסיסטנט', sample:H,
    weights:[{n:'Regular',w:400,f:'SuezOne-Regular.ttf'}] },

  { slug:'amatica-sc', he:'אמטיקה', en:'Amatica SC', heb:true, designer:'Tzvika Rosenberg · Cyreal',
    cat:'display', catHe:'Display', scripts:'עברית · לטינית · ספרות', license:'OFL 1.1', free:true,
    use:'כותרות קלילות, הזמנות, תפריטים. אותיות צרות ומצוירות ביד.', mood:'קליל · מצויר · שובב',
    source:'Google Fonts', path:'library/amatica-sc/', pairs:'אלף', sample:H,
    weights:[{n:'Regular',w:400,f:'AmaticaSC-Regular.ttf'},{n:'Bold',w:700,f:'AmaticaSC-Bold.ttf'}] },

  { slug:'dana-yad', he:'דנה יד', en:'Dana Yad', heb:true, designer:'סטודיו אאא',
    cat:'script', catHe:'כתב יד', scripts:'עברית · ספרות', license:'חינמי (אאא)', free:true,
    use:'כתב-יד יומיומי, ציטוטים, חתימות, מגע אישי וחם.', mood:'כתב-יד · אישי · נונשלנטי',
    source:'alefalefalef.co.il', path:'library/dana-yad/', pairs:'אסיסטנט', sample:H,
    weights:[{n:'Normal',w:400,f:'DanaYadAlefAlefAlef-Normal.otf'}] },

  { slug:'stam', he:'סת״ם', en:'STAM', heb:true, designer:'Culmus (CLM)',
    cat:'stam', catHe:'סת"ם', scripts:'עברית', license:'GPL', free:true,
    use:'כתב סת"ם מסורתי, עיצוב יהודי/דתי, כותרות תורניות. אשכנז וספרד.', mood:'מסורתי · קודש · עתיק',
    source:'Culmus / freefonts.co.il', path:'library/stam/', pairs:'פרנק ריהל ליבר', sample:'בְּרֵאשִׁית בָּרָא אֱלֹהִים',
    weights:[{n:'אשכנז',w:400,f:'stamashkenazclm-webfont.ttf'},{n:'ספרד',w:400,f:'stamsefaradclm-webfont.ttf'}] }
];
