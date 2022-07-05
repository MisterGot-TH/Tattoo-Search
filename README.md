## ข้อมูล
* ไฟล์ Tattoos.js
```javascript
const tattoos = [
  {
    title: "แขนเท่ห์",
    thumbnailUrl: "/images/tattoo-01-small.jpg",
    fullUrl: "/images/tattoo-01-large.jpg",
  },
  {
    title: "มือเท่ห์",
    thumbnailUrl: "/images/tattoo-02-small.jpg",
    fullUrl: "/images/tattoo-02-large.jpg",
  },
  {
    title: "คอเท่ห์",
    thumbnailUrl: "/images/tattoo-03-small.jpg",
    fullUrl: "/images/tattoo-03-large.jpg",
  },
  {
    title: "หลังเท่ห์",
    thumbnailUrl: "/images/tattoo-04-small.jpg",
    fullUrl: "/images/tattoo-04-large.jpg",
  },
  {
    title: "แขนเท่ห์",
    thumbnailUrl: "/images/tattoo-05-small.jpg",
    fullUrl: "/images/tattoo-05-large.jpg",
  },
  {
    title: "แขนเท่ห์",
    thumbnailUrl: "/images/tattoo-06-small.jpg",
    fullUrl: "/images/tattoo-06-large.jpg",
  },
];
```

## แสดงชื่อและรูปภาพ

* ไฟล์ App.js  
   
   ใช้ **map** เข้าไปดึงข้อมูลชื่อรูปภาพทั้งหมดในไฟล์ **tattoos.js** มาแสดงในหน้า App

```javascript
const tattooElements = tattoos
    .map((tattoo, index) => {
      return (
        <TattooItem
          key={index}
          tattoo={tattoo}
        />
      );
    });
```
* ไฟล์ TattooItem.js
   สร้าง div สำหรับแสดงชื่อและรูปภาพส่งกลับไปที่หน้า App

```javascript
function TattooItem(props) {
  const { tattoo } = props;
  return (
    <div className="tattoo-item">
      <img
        src={tattoo.thumbnailUrl}
      />
      <h4>{tattoo.title}</h4>
    </div>
  );
}
```


