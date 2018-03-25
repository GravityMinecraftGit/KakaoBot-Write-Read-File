//License : GNU General Public License

var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //변수 생성
var folder = new java.io.File(sdcard+"/G.M_BOT/"); //생성할 풀더 위치 및 이름 지정
folder.mkdirs(); //풀더 생성

function save(folderName,fileName,str){ //파일 생성 및 쓰기 함수 제작
var c=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
var d=new java.io.FileOutputStream(c);
var e=new java.lang.String(str);
d.write(e.getBytes());
d.close();
}

function read(folderName,fileName){ //파일 읽기 함수 제작
var b=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
if(!(b.exists())) return null; //만약 읽을 파일이 없다면 null 변환
var c=new java.io.FileInputStream(b); 
var d=new java.io.InputStreamReader(c);
var e=new java.io.BufferedReader(d);
var f=e.readLine();
var g="";
while((g=e.readLine())!=null){
f+="\n"+g; //\ = 역슬래쉬 → 줄바꿈 표시
}
c.close();
d.close();
e.close();
return f.toString(); //읽은 파일 내용을 반환
}

-----------------

var folder = new java.io.File(sdcard+"/풀더/"); 
folder.mkdirs(); //풀더 라는 풀더를 sdcard에 생성

save("풀더","제목","내용"); //풀더 라는 풀더에 제목이라는 파일을 만들어서 내용이라고 작성
read("풀더","제목"); //풀더 라는 풀더에서 제목이라는 파일을 읽어서 반환

replier.reply(read("풀더","제목")); //풀더 라는 풀더에서 제목이라는 파일을 읽어서 카카오톡으로 전송

