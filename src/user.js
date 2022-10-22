import './user.css';
const User = () =>{
  // const ref = collection(firestore, "messages");
  return(
    <body>
    <div className="create">
      <h2>
        SUBMIT A NEW ENTRY:
      </h2>
    <form action="" id="contactForm">
      <label>
        describe the waste:
      </label>
      <textarea id="waste" cols="30" rows="10" placeholder=""></textarea>
      <label>Date of waste identification</label>
      <textarea id="ident" cols="30" rows="10" placeholder=""></textarea>
      <label>
       Approximate weight of waste:
      </label>
      <textarea id="weight" cols="30" rows="10" placeholder=""></textarea>
      <label>
        Loation inside the campus:
      </label>
      <select id="location">
        <option value="ADMIN BUILDING">ADMIN BUILDING</option>
        <option value="GYMKHANA PARK AND NEW GALLERY">GYMKHANA PARK AND NEW GALLERY</option>
        <option value="ECE,CSE AND EIE DEPARTMENT AREA">ECE,CSE AND EIE DEPARTMENT AREA</option>
        <option value="ME,CE,EE,MBA DEPARTMENT AREA">ME,CE,EE,MBA DEPARTMENT AREA</option>
        <option value="T-POINT,BH1,BH2,BH3,PG HOSTEL AREA">T-POINT,BH1,BH2,BH3,PG HOSTEL AREA</option>
        <option value="BH9 COMPLEX">BH9 COMPLEX</option>
        <option value="BH4,BH8 AND BH5 AREA">BH4,BH8 AND BH5 AREA</option>
        <option value="GH1,GH2.GH3 AREA">GH1,GH2.GH3 AREA</option>
        <option value="SPORTS COMPLEX AREA">SPORTS COMPLEX AREA</option>
        <option value="GUEST HOUSE AREA">GUEST HOUSE AREA</option>
      </select>
      <div class="inputBox">
                <button type="submit">Submit</button>
            </div>
     </form>
    </div>
    {/* <script src="firebase/firebase.js"></script> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
    <script src="./firebase.js"></script>
    </body>
  )
}
export default User;