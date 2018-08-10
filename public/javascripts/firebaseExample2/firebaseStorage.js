const FirebaseStorage =  firebase.app().storage('gs://drivesystem-cb5d1.appspot.com');

var storageRef = firebase.storage().ref('img/hi');
var mountainsRef = storageRef.child('hello12344.jpg');

var reader = new FileReader();
reader.readAsDataURL('./aa.jpg');

const file = new File(getFile('./aa.jpg'), './aa.jpg', {type: 'image/jpeg'});
const metadata = {
    contentType: 'image/jpeg'
};
mountainsRef.put(file,metadata);
console.log(storageRef);