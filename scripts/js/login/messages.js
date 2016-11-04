function getmessage(messageId)
{
     var message = "";
     messageId = parseInt(messageId);
    console.log(messageId);
     switch(messageId)
     {
          case 0:
                 message = "Bu kullanıcı adı alınmıştır";
                 break;
          case 1:
                 message = "Kayıt oluşturuldu. Lütfen Giriş Yapın."
                 break;
          case 2:
                 message = "Şifreler eşleşmedi!"
                 break;
          case 3:
                 message = "Kullanıcı adı kısa !"
                 break;
          case 4:
                 message = "Kullanıcı adı uzun !"
                 break;
          case 5:
                 message = "Şifre girişi yapmadınız !"
                 break;

     }
    console.log(message);
         return message;
}