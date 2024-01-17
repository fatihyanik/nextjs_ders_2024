## 1. What is NextJS?

```jsx
Next.js is an open-source JavaScript framework that is built on '(top of React)', a popular JavaScript library for building user interfaces.
It is designed to make it easier to create '(server-rendered)' React applications with a focus on developer productivity, performance, and
SEO (Search Engine Optimization). Next.js provides a set of tools and conventions that simplify various aspects of building web applications.
```

```jsx
Next.js, kullanıcı arayüzleri oluşturmak için popüler bir JavaScript kütüphanesi olan "(React'in üstüne)" inşa edilmiş açık kaynaklı bir JavaScript çerçevesidir. '(server-rendered)' oluşturmayı kolaylaştırmak için tasarlanmıştır. Geliştirici üretkenliği, performans ve SEO (Arama Motoru Optimizasyonu) odaklı React uygulamaları. Next.js, web uygulamaları oluşturmanın çeşitli yönlerini basitleştiren bir dizi araç ve kural sağlar.
```

## 2. What is key features of Next.js?

```jsx
1. '(Page-Based Structure)': The application follows a page-based structure, where each page corresponds to a file in the "pages" folder within the project directory. This leads to automatic route generation.
2. '(Server-Side Rendering (SSR))': Next.js facilitates server-side rendering, meaning that pages are generated on the server and then sent to the user. This results in faster initial page loads and improves search engine optimization (SEO).
3. '(Client-Side Routing)': Transitions between pages are handled through client-side routing, making page transitions faster since the content is dynamically loaded on the client side.
4. '(API Routes)': Next.js provides a mechanism for creating simple API routes that run on the server side.
5. '(Data Fetching and Prefetching)': Next.js allows developers to manage data fetching either during the page load or when a user clicks on a link, with support for prefetching data to enhance performance.
6. '(Modular Structure)': Next.js follows a modular structure, including a set of predefined features that make application development faster and more efficient.
7. '(Static Site Generation (SSG))': Next.js supports static site generation, allowing pages to be compiled and served as static files, offering performance and scalability benefits.
8. '(Automatic Code Splitting)': Next.js automatically splits code into smaller parts, loading only the necessary components, resulting in faster loading times.
9. '(Customizable Head Element)': It provides an easy way to customize the head element of each page, allowing developers to set titles, meta tags, and other header elements.
10. '(TypeScript Support)': Next.js supports TypeScript, providing developers with static typing for enhanced safety and code readability.

Next.js enables developers to build scalable and performant web applications quickly. Its features make it well-suited for various use cases, including static websites, dynamic web applications, and even serverless applications. The framework is widely adopted in the React ecosystem and is known for its ease of use and developer-friendly features.
```

```jsx
1. '(Sayfa Tabanlı Yapı)': Uygulama, sayfa tabanlı bir yapıya sahiptir. Her sayfa, proje dizinindeki "pages" klasöründe bulunan bir dosyaya karşılık gelir. Bu sayede otomatik olarak route'lar oluşturulur.
2. '(Server-Side Rendering (SSR))': Next.js, sayfaları sunucu tarafında oluşturarak kullanıcıya daha hızlı ve SEO dostu bir deneyim sunar. Bu, sayfanın içeriğinin sunucu tarafında oluşturulup kullanıcıya gönderilmesi anlamına gelir.
3. '(Client-Side Routing)': Sayfalar arası geçişler, tarayıcıda gerçekleşen client-side routing ile sağlanır. Bu, sayfalar arası geçişlerin daha hızlı olmasını sağlar.
4. '(API Routes)': Uygulamanın sunucu tarafında çalışan basit APIlar oluşturmak için özel bir API rotası mekanizması bulunmaktadır.
5. '(Ön Yüklemeler ve Veri Getirme)': Sayfa yüklendiğinde veya kullanıcı bir linke tıkladığında otomatik olarak veri çekme işlemlerini yönetmek için özel fonksiyonlar kullanılabilir.
6. '(Modüler Yapı)': Next.js, modüler bir yapıya sahiptir ve bir dizi ön tanımlı özellik içerir. Bunlar, uygulama geliştirmeyi daha hızlı ve etkili hale getirir.
7. '(Static Site Generation (SSG))': Sayfaların derlenip statik dosyalar olarak sunulmasını sağlar, bu da performans ve ölçeklenebilirlik avantajları sağlar.
8. '(Automatic Code Splitting)': Otomatik kod bölme özelliği sayesinde sadece kullanıcı ihtiyaç duyduğu kod parçaları indirilir, bu da daha hızlı yükleme süreleri sağlar.
9. '(Customizable Head Element)': Her sayfanın başlık, meta etiketleri gibi başlık elementlerini özelleştirmek için kolay bir yol sunar.
10. '(TypeScript Desteği)': Next.js, JavaScript yanında TypeScripti de destekler, bu da daha güvenli ve daha okunabilir kod yazmayı sağlar.
Next.js, geliştiricilere hızlı bir şekilde ölçeklenebilir ve performanslı web uygulamaları oluşturmak için güçlü bir temel sağlar.

```

## 3. What is Routing?

```jsx
Routing is like giving '(directions)' to a website. When you type a web address (URL) into your browser, routing tells the website which page or thing to show you. It's like a '(map that quides)' the website to the right place when you click a link or enter a web address. So, routing helps the website know what to display based on what you're looking for.
```

```jsx
Yönlendirme, bir web sitesine '(yol tarifi)' vermek gibidir. Tarayıcınıza bir web adresi (URL) yazdığınızda, yönlendirme web sitesine size hangi sayfayı veya şeyi göstereceğini söyler. Bir bağlantıya tıkladığınızda veya bir web adresi girdiğinizde web sitesini doğru yere yönlendiren bir '(harita)' gibidir. Yani yönlendirme, web sitesinin aradığınız şeye göre neyi görüntüleyeceğini bilmesine yardımcı olur.
```

## 4. Basic Routing

```
Basic Routing
https://localhost:3000/about
bu url adresini olusturmak icin about folder'i olusturulur ve icine page.js file'i acilir
not: file ismi page.js olmak zorunda
```

## 5. Nested Routing

```
Nested Routing
https://localhost:3000/users/about
bu url adresini olusturmak icin users folder'i olusturulur ve icine page.js file'i acilir ve icine about folder'i olusturulup icine page.js file acilir
not: file ismi page.js olmak zorunda
```

## 6. What is Link?

```
Link is a component provided by Next.js allows you to create links to navigate between pages in your application.

It's primarily used for declarative, client-side navigation. When you clieck on a link created with Link, it prevents the default browser full-page refresh and fetches the new page content on the client side, resulting in a faster and smoother user experience.

It's typically used in your component's JSX code to create clickable links that lead to other pages within your Next.js application.

```

```
Link, Next.js tarafından sağlanan bir bileşendir ve uygulamanızdaki sayfalar arasında gezinmek için bağlantılar oluşturmanıza olanak tanır.

Öncelikle bildirimsel, istemci tarafı gezinme için kullanılır. Link ile oluşturulan bir bağlantıya tıkladığınızda, varsayılan tarayıcı tam sayfa yenilemesini önler ve yeni sayfa içeriğini istemci tarafında getirerek daha hızlı ve sorunsuz bir kullanıcı deneyimi sağlar.

Genellikle bileşeninizin JSX kodunda, Next.js uygulamanızdaki diğer sayfalara yönlendiren tıklanabilir bağlantılar oluşturmak için kullanılır.
```

## 7. What is useRouter()?

```
useRouter is a hook provided by Next.js that allows you to access the router object and its properties within your component.

It provides programmatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within your component.

It's useful when you need to handle navigation or acccess route-specific information directly in your component logic.
```

```
useRouter, Next.js tarafından sağlanan ve bileşeninizdeki yönlendirici nesnesine ve özelliklerine erişmenizi sağlayan bir kancadır.

Yönlendirici üzerinde programatik kontrol sağlar ve bileşeninizdeki kullanıcı etkileşimlerine veya olaylara yanıt olarak farklı sayfalara gitmenize veya yönlendirmeyle ilgili diğer eylemleri gerçekleştirmenize olanak tanır.

Navigasyonu işlemeniz veya rotaya özgü bilgilere doğrudan bileşen mantığınızda erişmeniz gerektiğinde kullanışlıdır.
```

## 8. What is ignoring routes?

```
Bir route olustururken url adresinde görülmesini istemedigimiz route folder'ini () icine yazariz.
Örnegin: register ve login sayfalarinin bulundugu bir auth folderinin url ismi
https://localhost:3000/register veya https://localhost:3000/login olsun istiyorsak auth folderini (auth) bu sekilde yazmaliyiz.
```

## 9. What is Dynamic Routes?

```
Dynamic routes in Next.js refer to a feature that allows you to create web pages with variable or dynamic parts in the URL.
Instead of defining individual routes for every possible URL, you can create a single route pattern that matches a variety of dynamic values.
This is extremely useful when you have pages that share a common structure but differ based on specific information in the URL.
```

```
Next.js'deki dinamik rotalar, URL'de değişken veya dinamik parçalar içeren web sayfaları oluşturmanıza olanak tanıyan bir özelliği ifade eder.
Olası her URL için ayrı ayrı rotalar tanımlamak yerine, çeşitli dinamik değerlerle eşleşen tek bir rota deseni oluşturabilirsiniz.
Bu, ortak bir yapıyı paylaşan ancak URL'deki belirli bilgilere göre farklılık gösteren sayfalarınız olduğunda son derece kullanışlıdır.
```

```
https://localhost:3000/users/fatih bu url adresinde fatih kisisini dinamik olarak degistirmek icin yapilmasi gerekenler:
1. app folderinin icine users folderi acilir ve her zaman yapilmasi gereken page.js file'i olusturulur.
2. users folder'inin icine [user] köseli parantez icine user isimli folder acilir ve onun icine page.js file'i olusturulur.
3. page.js icine ise 'use client' yazilir sonrasinda da {params} yardimiyla dynamic routelar olusturulur.
```

## 10. Catch-All Routes

```
In Next.js, the [...foldername] notation indicates that you are using a catch-all route, which allows you to capture multiple URL segments and treat them as a dynamic array of values. This is useful when you want to create dynamic routes that can handle varying numbers of URL segments.
```

```
Next.js'de [...foldername] notasyonu, birden fazla URL segmentini yakalamanıza ve bunları dinamik bir değer dizisi olarak ele almanıza olanak tanıyan bir catch-all rotası kullandığınızı gösterir. Bu, değişen sayıda URL segmentini işleyebilen dinamik rotalar oluşturmak istediğinizde kullanışlıdır.
```

```
https://localhost:3000/users/fatih/projects/e-commerce/ gibi bir url adresimiz oldugunu varsayalim.
bu url adresinde https://localhost:3000/users adresinden sonrasini yani bu kismi fatih/projects/e-commerce/ dynamic olarak kullanabiliriz.
```

## 11. Page Not Found

```
Next.js te bu sayfayi olusturmak cok basittir.  app folder'inin icine not-found.js file'i olusturmamiz yeterlidir. Next.js te zaten bu sayfa default olarak bulunmaktadir
```

## 12. Redirect?

```
Next.js 14 ile birlikte gelen bir özellik, redirect fonksiyonudur. Bu fonksiyon, sayfa içindeki bir bileşen veya yönlendirme işlevi aracılığıyla sayfanın başka bir yerine yönlendirme yapmanıza olanak tanır.
```
