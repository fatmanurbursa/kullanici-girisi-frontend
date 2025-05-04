//KAYIT FORMU butona basınca kullanıcı bilgilerini backende yollayacak

document.getElementById('registerForm').addEventListener('submit',function(e){
    e.preventDefault();  
    
    
    const username=document.getElementById('username').value;
    const password=document.getElementById('passwrd').value;


fetch('http://localhost:8080/api/register',{ //örnek olsun diye backend e asil adresi yazicaz
 method:'POST',
 headers:{ 'Content-Type':'application/json'},
 body:JSON.stringify({username,password})
}).then(response=>response.text())
.then(data=>{
    alert('Kayıt başarılı '+data)
}).catch(error=>console.error('Hata ',error))

})


//GİRİŞ FORMU  backende giriş isteği aticak

document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    
    
    const userName=document.getElementById('loginUsername').value;
    const passwrd=document.getElementById('loginPasswrd').value;


fetch('http://localhost:8080/api/login',{ //örnek olsun diye backend e asil adresi yazicaz
 method:'POST',
 headers:{ 'Content-Type':'application/json'},
 body:JSON.stringify({userName,passwrd})
}).then(response=>response.text())
.then(data=>{
    alert('Giriş Sonucu '+data)
}).catch(error=>console.error('Hata ',error))

})





/* 

formdan aldığımız verileri backend göndermek cevap almak ve kullanıcıya göstermek

fetch : tarayıcadan başka bir sunucuya backende veri göndermeye veya evri almaya yarar

fethch(...) .... -> gitmek istediğin adres
kendi bilgisayarındaki sunucunun (localhost) 8080 portundaki /api/register endpointine gitmek istiyoruz
(ilerde gerçek website olabilir bu)

method : POST ----> bu gönderme şekli. Post demek sana yebi veri yolluyorum demek.Kayıt işlemleri hep post olur

headers : gönderdiğimiz verimim türümü bildiriyoruz.
Burada dedik ki ben sana json(javascript object notation) veri yolluyorum.
sunucuda ona göre alacak

body: gerçekten gönderdiğimiz veri burda.Kullanıcıdan aldığomız bilgileri yolluyoruz(username,password)
json.stringify(...)----> bu nesneyi jason formatına çeviriyoruz.
json şekli : 

{
    "username" :"bugsy",
    "password":"23424"
}


.then(response=>response.text())----> sunucudan bir cevap geldiğinde bunu text düz yazı olarak al


.then(data=>{......}) ...-> gelen veriyi alıp bir şeyler yap.
Burada gelen cevabı popup mesajı (alert) yapıyoruz.Mesaj gösteriyoruz.

.catch(error=>{console.error('Hata',error)})
.catch(....)---->Eğer fetch sırasında bir hata olursa mesela sunucu kapalıysa hatayı yakalıyoruz ve konsola yazıyoruz.




http : webde haberleşmek için kullanılan protokol ileride güvenlik için https kullanacağız
localhost : kendi bilgisayarım
gerçek sunucuya geçince burası domain olacak.
8080: sunucu bir port üzerinde çalışır.Bilgisayardaki bir kapı gibi düşün.
3000 frontend projeleri reackt falan
8080 backend projeleri java spring boot, genellikle 
eğer bu port kapalıysa başka port deneyebilirsin.

/api/register bu kısım hangi işlemi istiyorsun kısmı. Kullanıcı kayıt işlemi
/ap/login ---> kullanıcı girişi
/api/products--->ürünleri listele
/api/orders---->sipariş oluştur.
istediğin işleme göre endpoint oluşturç.


ixbdex html live server 5500 portu ekran portu o ayrı bir şey frontend dosyalarını gösteren sunucu



8080 sunucu ve veri işleri--->gerçekten çalışması için bir backend sunucusu(java,springboot),java jdk,springboot projesi gerekli
backendde postmapiing ile tanıtıcaz


Tarayıcı (index.html) - 5500 PORTU 
        *
        *   fetch ile veri gönderiyoruz
        *
        * 
Java Spring Boot Server - 8080 PORTU
        *
        *  gelen veriyi işliyor kaydediyor
        * 
        * 
Veri tabanı(ilerde)


index.html -- kullanıcı formu doldurur
js içinde fetch ile 8080 ne veri yollanır
backend bu veriyi işler cevap verir
js bu cevabı kullanıcıya gösterir


e.preventDefault();  hmtl formunun kendi varsayılan davranışı vardır.Formun varsayılan gönderme işlemini iptal et ben onu kendim yöneteceğim diyorçYani
butona basınca browser gider formu sunucuya yollar ve sayfa yeniden açılır.Sayfa refreshlemeden açılması için.
Veriyi gönderir sayfa aynı kalır.


Kullanıcı bilgisi,ürün bilgisi vs---> json formatı
dosya,fotoğraf yüklerken---> mıltipart/form-data formatı

rest apiler çoğunluk json.

Rest api --> İki sistemin (tarayıcı,sunucu)birbirine veri göbderip almasını sağlayan kurallar bütünü.
Tarayıcı --- front end ---> sunucuya veri yollar
Sunucu --- backend ----> Tarayıcıya cevap verir
Bunu belli kurallar çerçevesinde yaparlar---> rest kurallar

rest-- verilere düzenli ve kurallı erişim yöntemi
api----iki yazılımın konuştuğu arayüz
rest api---- düzenli bir şekilde veri alışverişi yapan sistem.Yani yukarıdaki sistemin adı.
    


proje yönetim araçları :  maven,gradle. Bunlar projenin bağımlılıklarını otomatik indirir ve yönetir.Projenin build edilmesini yani derlenip çalıştırılmasını sağlar.
Projenin versiyonlamasını ve geliştirme sürecini düzenler.
Maven po.xml dosyası ile çalışır. 
Gradle kotlin.Daha yeni ve hızlı

*/
