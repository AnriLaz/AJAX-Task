# AJAX-Task

ააწყე html ფაილი სადაც იქნებ ბათანი, რომელზე დაკლიკებითაც გაეშვება აჯაქს რექვესთი ამ მისამართზე: https://jsonplaceholder.typicode.com/photos
მოსული დატა დაარენდერე თეიბლში, რომლის ქოლუმნებიც იქნება "title" და "image". title-ში გამოვა დასახელება, ხოლო image-ში "thumbnailUrl" დაიხატება, მასზე დაჭერისას გადავა "url"-ზე.
მოდელი რომლის ჩანაწერებიც მოგივა სერვერიდან ასეთია
{
    "albumId": 1,
    "id": 34,
    "title": "vitae est facere quia itaque adipisci perferendis id maiores",
    "url": "https://via.placeholder.com/600/35185e",
    "thumbnailUrl": "https://via.placeholder.com/150/35185e"
  },
ასევე, ბათანზე დაჭერიდან, დატას დახატვამდე პერიოდში გამოაჩინე ლოადერი, რაიმე სპინერი რომ მიმდინარეობს დატას ლოადი.
უნდა გამოიყენო: XMLHttpRequest კლასი და ნეიტივ html/css/js
