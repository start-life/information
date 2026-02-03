const pagesData = {
    "guide": {
        title: "מדריך שימוש",
        icon: "fas fa-book-reader",
        content: `# מדריך למשתמש

ברוכים הבאים! כאן תלמדו איך להוציא את המקסימום מהמערכת וליצור תמונות מדהימות בקלות. 🎨🤖

# מודל תמונה image 1 (מודל ברירת מחדל)
מודל יצירת תמונות בסיסי ומהיר. טוב במיוחד למשימות פשוטות וברורות, עם תגובה מהירה ותוצאות יציבות.
### שימוש
שלח את הפרופט ללא תווים נוספים  
לדוגמה
\`\`\`bash
Create a picture for me of a cat climbing a tree.
\`\`\`
✍️ **כתבו באנגלית בלבד** - במודל זה הפרומפט חייב להיות האנגלית בלבד   
🌐 טיפ: תוכלו לתרגם את הפרומפטים שלכם עם [Google Translate](https://translate.google.co.il/?hl=iw&sl=iw&tl=en&op=translate)   
💰 עלות מודל: ₪0.10

# מודל תמונה image 2
גרסה מתקדמת ובעלת איכות גבוהה יותר. מצטיינת בפרטים עדינים, תאורה, טקסט ודמויות. מתאימה לפריטים מורכבים ולתוצאות מקצועיות.
### שימוש
ניתן להשתמש במצב זה עם הפקודה \`/2\`  
לדוגמה
\`\`\`bash
/2 Create a picture for me of a cat climbing a tree.
\`\`\`
✍️ **כתבו באנגלית בלבד** - במודל זה הפרומפט חייב להיות האנגלית בלבד   
🌐 טיפ: תוכלו לתרגם את הפרומפטים שלכם עם [Google Translate](https://translate.google.co.il/?hl=iw&sl=iw&tl=en&op=translate)   
💰 עלות מודל: ₪0.20

# 🍌 מודל Nano Banana Pro   
זהו מודל בינה מלאכותית שמייצר תמונות באיכות פוטו-ריאליסטית של עד 4K. הוא מצטיין ביצירת טקסט מדויק בתוך תמונות (גם בעברית), עריכת תאורה וזוויות צילום מתקדמות ושמירה על עקביות של דמויות לאורך סדרת תמונות.   
עיקרי המודל:   
* 🖼️ **איכות מקצועית**: תומך ברזולוציה של עד 4K, יוצר ויזואליה באיכות סטודיו.   
* ✍️ **שילוב טקסט מדויק**: מצטיין ברינדור טקסט קריא בתמונות בשפות שונות, כולל עברית.   
* 🔧 **עריכה מתקדמת**: מאפשר עריכה מקומית, שינוי זוויות מצלמה, תאורה ומיקוד באמצעות הנחיות טקסטואליות.    
* 🔄 **עקביות ויזואלית**: שומר על מראה עקבי של דמויות או אובייקטים במספר תמונות, משלב עד 3 תמונות רפרנס.    
* 🌐 **חיבור למידע בזמן אמת**: משתמש בחיפוש גוגל כדי להבטיח דיוק בפרטים בעת יצירת אינפוגרפיקות ודיאגרמות.   
### שימוש
ניתן להשתמש במצב זה עם הפקודה \`/N\`  
לדוגמה
\`\`\`bash
/N צור לי תמונה של חתול שותה כוס יין וצופה על מגדל איפל
\`\`\`
🖼️ כרגע ניתן לשלוח עד 3 תמונות למודל
### בחירת איכות
ניתן לבחור איכות תמונה עם הוספת הארגומנט \`-- 4k\`   
איכויות זמינות 1k, 2k, 4k
כבררת מחדל האיכות היא 1k   
פקודה מלאה צריכה להיראות כך
\`\`\`bash
/N -- 4k צור לי תמונה של חתול שותה כוס יין וצופה על מגדל איפל
\`\`\`
💰 עלות מודל: תלויה בבחירת איכות: 1K ₪1.20 ,  2K ₪1.70 ,  4K ₪2.20

# מצב AI 🎯
מצב אינטראקטיבי שמאפשר לשוחח עם המודל לפני ואחרי יצירת התמונה. טוב כשצריך תוצאה מדויקת או כמה תיקונים עד שמגיעים למה שרוצים. במצב זה התמונות יוצאות טובות יותר עקב שימוש בפרומפטים מפורטים ומדויקים יותר המותאמים למודל, במצב זה ישנם כמה פונקציות שימושיות:  
✨ ניתן לשלוח פרומפטים בעברית  
✨ אם התמונה יצאה לא כמו שרציתם ניתן להשיב למודל ולומר לו מה לשנות, כן הוא זוכר את התמונה שיצרתם 🤩  
✨ ניתן לדבר עם המודל ולהסביר לו בדיוק מה אתם רוצים עוד לפני יצירת התמונה 
### שימוש 
ניתן להשתמש במצב זה עם הפקודה \`/AI\`  
לדוגמה
\`\`\`bash
/AI Create a picture for me of a cat climbing a tree.
\`\`\`
🗑️ חשוב - כשאתם משיבים למודל חשוב למחוק את שירשור ההודעות הקודמות

# מודל עריכה ✂️🖌️
מודל זה מאפשר לכם לשלוח תמונה לעריכה
### שימוש
ניתן להשתמש במצב זה עם הפקודה \`/edit\`  
לדוגמה
\`\`\`bash
/edit Put sunglasses on the man in the picture.
\`\`\`
✍️ **כתבו באנגלית בלבד** - במודל זה הפרומפט חייב להיות האנגלית בלבד   
🌐 טיפ: תוכלו לתרגם את הפרומפטים שלכם עם [Google Translate](https://translate.google.co.il/?hl=iw&sl=iw&tl=en&op=translate)   
💰 עלות מודל: ₪0.20

# יחס רוחב - גובה 📐
כברירת מחדל יצירת תמונות תתבצע ביחס 16:9 אבל תוכלו לבחור יחס אחר עם הוספת הארגומנט \`--\` לפני הפרומפט   
לדוגמה
\`\`\`bash
--1:1 Create a picture for me of a cat climbing a tree.
\`\`\`
רשימת יחס רוחב - גובה זמינה
\`\`\`bash
1:1
16:9
9:16
3:2
2:3
4:3
3:4
21:9
\`\`\`
![יחס רוחב גובה](Guide/11f658e3-7072-4fe6-9f4f-473edc25c292.jpg)
* אפשרות בחירת יחס רוחב - גובה זמינה בכל המודלים למעט מודל Nano Banana Pro שם היחס נבחר אוטמטית ע"י המודל, וגם במצב AI שם היחס הוא 16:9
`
    },
    "Tips": {
        title: "טיפים",
        icon: "fas fa-lightbulb",
        content: `# טיפים לשימוש מיטבי ✅
מגון טיפים לעבודה נכונה עם המודלים לקבלת התוצאות הטובות ביותר

# טיפים לשימוש במודלים image 1 ו image 2

## מבנה פרומפט בסיסי 📋
 מגיב היטב לפרומפטים ישירים וברורים. - תאר במדויק מה אתה רוצה לראות:
\`\`\`bash
A red apple on a wooden table, natural lighting, photorealistic
\`\`\`

## טיפים למיקסום איכות
1. היו ספציפיים עם סגנון
\`\`\`bash
Portrait of an elderly craftsman, documentary photography style, 
natural window light, 85mm lens, shallow depth of field
\`\`\`
2. שימוש במונחים טכניים  
✨ **תאורה:** "golden hour", "soft diffused light", "dramatic side lighting"  
✨ **מצלמה:** "wide angle", "macro shot", "aerial view"  
✨ **איכות:** "8K resolution", "highly detailed", "sharp focus"
3. מבנה מומלץ לפרומפט
\`\`\`bash
[נושא ראשי] + [סגנון אמנותי] + [תאורה] + [זווית/קומפוזיציה] + [פרטים נוספים]
\`\`\`
דוגמה
\`\`\`bash
Ancient library interior, Art Nouveau style, warm amber lighting 
streaming through stained glass windows, low angle shot, 
intricate wooden bookshelves, leather-bound books, dust particles 
visible in light rays
\`\`\`

## דוגמאות מעשיות
### נוף טבע 🌿
\`\`\`bash
A vast mountainous landscape with snow-capped peaks,
a crystal-clear river winding through the valleys,
warm sunset light falling over the trees,
dramatic sky with layered clouds, high detail and strong depth.
\`\`\`
![נוף טבע](Tips/d5eaf320-aa63-49c1-b70c-3fa02f320471.jpg)
### ארכיטקטורה 🏛️
\`\`\`bash
Modern minimalist house, concrete and glass materials, 
desert landscape, sunset lighting, architectural photography, 
clean lines, sharp geometric shapes
\`\`\`
![ארכיטקטורה](Tips/ea017dcf-0128-48d3-a160-cd8e9bbde4c1.jpg)
### אובייקטים 🧩
\`\`\`bash
An old metallic compass with clear directional markings,
placed on an ancient map,
shallow depth of field with a soft blurred background for strong object focus.
\`\`\`
![אובייקטים](Tips/9361205f-9e68-4bb0-a00b-6abd98c690d7.jpg)
### סצנות עירוניות 🏙️
\`\`\`bash
A commercial street with open shops, large storefront windows with vivid reflections,
fine architectural details on building walls,
coarse concrete tiles captured in extremely sharp detail.
\`\`\`
![סצנות עירוניות](Tips/c11d8271-50b8-4a22-9996-1da311235de1.jpg)

## ✔️ איך כן לכתוב / ❌ איך לא לכתוב
💡 זה לא חובה אבל לקבלת תוצאות טובות ומרשימות יותר עדיף לפרט כמה שיותר כשיותר, **לקבל תוצאות מרשימות באופן אוטומטי תוכלו להשתמש ב[מצב AI](?page=guide#מצב-ai-)**  
**❌ לא טוב**
\`\`\`bash
Beautiful picture of a mountain with sky
\`\`\`
**תוצאה**
![הר עם שמיים](Tips/8bfc46d3-b8c2-41f1-b5b1-2179a35c194f.jpg)
**✅ טוב**
\`\`\`bash
Snow-capped mountain peak at sunset, dramatic orange and 
purple sky, alpine meadow in foreground with wildflowers, 
wide-angle landscape photography, crisp details
\`\`\`
תוצאה
![הר עם שמיים](Tips/d277a511-6f44-49f4-b4c9-9b530ccf7a41.jpg)
**❌ לא טוב**
\`\`\`bash
A plate of delicious food on a table in a restaurant
\`\`\`
**תוצאה**
![מנה במסעדה](Tips/162a91e5-03de-4b1d-844c-9c5b8491d01b.jpg)
**✅ טוב**
\`\`\`bash
Gourmet pasta dish with fresh herbs, white ceramic plate, 
rustic wooden table, soft natural light from side, 
food photography, shallow focus on the dish, 
professional culinary presentation
\`\`\`
**תוצאה**
![מנת גורמה](Tips/b8fc442e-b551-417c-9e2a-024002c49a44.jpg)


`
    },
    "updates": {
        title: "מה חדש",
        icon: "fas fa-wand-magic-sparkles", 
        content: `# מה חדש במערכת? 🚀

כאן תמצאו את כל העדכונים והשדרוגים האחרונים.

### הוספת מודל image 2
ניתן להשתמש בו עם הפקודה \`/2\`  
תוכלו לקרוא על זה [כאן](?page=guide#מודל-תמונה-image-2)

### 🍌 הוספת מודל Nano Banana Pro של גוגל   
ניתן להשתמש בו עם הפקודה \`/N\`  
תוכלו לקרוא על זה [כאן](?page=guide#-מודל-nano-banana-pro)

### בחירת איכות תמונה במודל Nano Banana Pro של גוגל
תוכלו לקרוא על זה [כאן](?page=guide#בחירת-איכות)


### בחירת  יחס רוחב - גובה 📐   
תוכלו לקרוא על זה [כאן](?page=guide#יחס-רוחב-גובה-)
`
    },
    "FAQ": {
        title: "שאלות נפוצות",
        icon: "fas fa-circle-question",
        content: `# שאלות נפוצות ומידע

# שגיאת NSFW
## מה זה אומר❓
זו שגיאה המתריעה כל נסיון יצירה של תוכן עירום או תוכן למבוגרים על מנת לשמור על הסביבה בטוחה ומתאימה לכלל משתמשים, יצירת התמונה תחסם ויבוצע חיוב   
## 🛡️ מה ניתן לעשות?   
נסה ליצור תמונה חלופית: מומלץ להשתמש בתיאור שונה או פחות ספציפי כדי להימנע מסינון נוסף.
`
    }
};
