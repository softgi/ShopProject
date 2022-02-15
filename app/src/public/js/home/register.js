"use strict"

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const pwCheck = document.querySelector("#confirm-pw");
const btn = document.querySelector("#button");

function registerBtn() {
    if(!id) return alert("아이디를 입력해주세요");
    if(!name) return alert("이름을 입력해주세요");
    if(!pw) return alert("비밀번호를 입력해주세요");
    if(!pwCheck) return alert("비밀번호 확인을 입력해주세요");
    if(pw !== pwCheck) return alert("비밀번호가 일치하지 않습니다");

    const req = {
        id : this.id,
        name : this.name,
        pw : this.pw
    }

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type: application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login"
        }else {
            if (res.err) return alert("에러");
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("error when register"))
    });
    
};

btn.addEventListener("click", registerBtn);