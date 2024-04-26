document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.getElementById('home');
  const aboutLink = document.getElementById('about');
  const contactLink = document.getElementById('contact');

  const homePage = document.getElementById('homePage');
  const aboutPage = document.getElementById('aboutPage');
  const contactPage = document.getElementById('contactPage');

  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllPages();
    homePage.classList.add('active');
  });

  aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllPages();
    aboutPage.classList.add('active');
  });

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllPages();
    contactPage.classList.add('active');
  });

  function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
  }
});
//cicer cifer algorithms
const normalChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
;

const codedChar = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
                    'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
                    'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
;
function encryptMonoalphabetic() {
  const plaintext = document.getElementById('monoPlaintext').value;
  const ciphertext = monoalphabeticEncrypt(plaintext);
  document.getElementById('monoResult').innerText = ciphertext;
}
function monoalphabeticEncrypt(s) {
    let encryptedString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 52; j++) {
            if (s.charAt(i) === normalChar[j]) {
                encryptedString += codedChar[j];
                break;
            }
            if (s.charAt(i) < 'A' || (s.charAt(i) > 'Z' && s.charAt(i) < 'a') || s.charAt(i) > 'z') {
                encryptedString += s.charAt(i);
                break;
            }
        }
    }
    return encryptedString;
}

function decryptMonoalphabetic() {
  const ciphertext = document.getElementById('monoPlaintext').value;
  
  const plaintext = monoalphabeticDecrypt(ciphertext);
  document.getElementById('monoResult').innerText = plaintext;
}
function monoalphabeticDecrypt(s) {
    let decryptedString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 52; j++) {
            if (s.charAt(i) === codedChar[j]) {
                decryptedString += normalChar[j];
                break;
            }
            if (s.charAt(i) < 'A' || (s.charAt(i) > 'Z' && s.charAt(i) < 'a') || s.charAt(i) > 'z') {
                decryptedString += s.charAt(i);
                break;
            }
        }
    }
    return decryptedString;
}

function encryptCaesar() {
  const plaintext = document.getElementById('caesarPlaintext').value;
  const shift = parseInt(document.getElementById('shift').value);
  const ciphertext = caesarCipher(plaintext, shift);
  document.getElementById('caesarResult').innerText = ciphertext;
}

function decryptCaesar() {
  const ciphertext = document.getElementById('caesarPlaintext').value;
  const shift = parseInt(document.getElementById('shift').value);
  const plaintext = caesarCipher(ciphertext, -shift);
  document.getElementById('caesarResult').innerText = plaintext;
}



function caesarCipher(str, shift) {
  return str.replace(/[a-zA-Z]/g, function(char) {
    let code = char.charCodeAt(0);
    let offset = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
  });
}
//////displaing of codee

function showMonoalphabetic() {
  let dis=document.getElementById('monoalphabeticForm');
  if(dis.style.display=='block'){
    dis.style.display='none';
  }
  else{
    dis.style.display='block';
    document.getElementById('MonoalphabeticQuiz').style.display='none';
  }
}
function showMonoalphabeticQuiz() {
  let dis=document.getElementById('MonoalphabeticQuiz');
  if(dis.style.display=='block'){
    dis.style.display='none';
  }
  else{
    dis.style.display='block';
    document.getElementById('monoalphabeticForm').style.display='none';
  }
}

function caesarQuiz() {
  let dis=document.getElementById('caesarQuiz');
  if(dis.style.display=='block'){
    dis.style.display='none';
  }
  else{
    dis.style.display='block';
    document.getElementById('caesarForm').style.display='none';
  }
}

function showCaesar() {
  let dis=document.getElementById('caesarForm');
  if(dis.style.display=='block'){
    dis.style.display='none';
  }
  else{
    dis.style.display='block';
     document.getElementById('caesarQuiz').style.display='none';
  }
}
//quiz questions
document.getElementById('quizFormCaesar').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const ans = {
    q1: document.getElementById('q1'),
    q2: document.getElementById('q2'),
    q3: document.getElementById('q3'),
    q4: document.getElementById('q4'),
    q5: document.getElementById('q5'),
    q6: document.getElementById('q6'),
  };

  const corAns = {
    q1: '1',
    q2: '2',
    q3: '3',
    q4: '1',
    q5: '2',
    q6: '3',
  };

  let score = 0;
  for (let que in ans) {
    if (ans[que].value === corAns[que]) {
      score++;
      //ans[que].style.backgroundColor='green';
      ans[que].style.color='green';
    }
    else{
      //ans[que].style.backgroundColor='red';
      ans[que].style.color='red';
    }
  }

  const result = document.getElementById('result');
  result.innerHTML = `<h2>Your Score: ${score} / 6</h2>`;
});
//cifer results

document.getElementById('quizFormMonolphabetic').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const ans = {
    m1: document.getElementById('m1'),
    m2: document.getElementById('m2'),
    m3: document.getElementById('m3'),
    m4: document.getElementById('m4'),
    m5: document.getElementById('m5'),
    m6: document.getElementById('m6'),
  };

  const corAns = {
    m1: '1',
    m2: '2',
    m3: '3',
    m4: '1',
    m5: '2',
    m6: '3',
  };

  let score = 0;
  for (let que in ans) {
    if (ans[que].value === corAns[que]) {
      score++;
      //ans[que].style.backgroundColor='green';
      ans[que].style.color='green';
    }
    else{
      //ans[que].style.backgroundColor='red';
      ans[que].style.color='red';
    }
  }

  const result = document.getElementById('results');
  result.innerHTML = `<h2>Your Score: ${score} / 6</h2>`;
});