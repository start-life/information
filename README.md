עכשיו, כשאתה כותב את התוכן, תשתמש בדוגמאות הבאות.  
דוגמה 1: תמונה עם טקסט מתחתיה  
במקום סתם לכתוב שורה חדשה, עטוף את הטקסט בדיב עם הקלאס שיצרנו:  
```
content: `
## תמונה עם כיתוב
הנה תמונה לדוגמה:

![תיאור](https://via.placeholder.com/800x400)
<div class="img-caption">תרשים זרימה של המערכת - מבט על</div>
```

דוגמה 2: שתי תמונות אחת ליד השנייה
כדי לשים שתיים (או שלוש) תמונות בשורה, עטוף אותן בדיב image-row.
(שים לב: במקרה הזה אנחנו כותבים img ב-HTML רגיל ולא ב-Markdown, כדי שזה יעבוד מושלם):
```
content: `
## השוואה לפני ואחרי
הנה שתי תמונות אחת ליד השנייה:

<div class="image-row">
  <img src="https://via.placeholder.com/400x300/ff0000/ffffff?text=Before" alt="לפני">
  <img src="https://via.placeholder.com/400x300/00ff00/ffffff?text=After" alt="אחרי">
</div>

<div class="img-caption">מימין: המצב הישן, משמאל: המצב החדש</div>
```

כיתוב נפרד לכל תמונה   
משתמשים בתגית <figure> שעוטפת את התמונה, ו-<figcaption> בשביל הטקסט.    
ה-JS שבנינו עדיין יעבוד והתמונות יפתחו בפופאפ זכוכית.   
```
<div class="image-row">
  <!-- תמונה ימנית עם כיתוב -->
  <figure>
    <img src="pic1.jpg" alt="לפני">
    <figcaption>המצב לפני השיפוץ (2024)</figcaption>
  </figure>

  <!-- תמונה שמאלית עם כיתוב -->
  <figure>
    <img src="pic2.jpg" alt="אחרי">
    <figcaption>המצב אחרי השיפוץ (2025)</figcaption>
  </figure>
</div>
```

כיתוב אחד משותף (השיטה הקודמת)
זה עדיין עובד מצוין אם לא משתמשים ב-figure:
```
<div class="image-row">
  <img src="pic1.jpg" alt="לפני">
  <img src="pic2.jpg" alt="אחרי">
</div>
<div class="img-caption">מימין: לפני, משמאל: אחרי</div>
```
