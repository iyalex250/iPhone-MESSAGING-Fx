// Created by Adåm

/*
	FUNCTIONAL OF IPHONE
	CREATED BY: @IYALEX250
	JUNE 08, 2020
*/

//my script

document.onclick = function (event) {
  var keyboardInput = document.getElementById("keyboardinput");
  var keyboardInput2 = document.getElementById("keyboardinput2");
  var target = event.target || event.srcElement;
  var letterClicked = target.innerHTML;

  if (target.classList.contains("clickable-key")) {
    var audio = document.getElementById("audio");
    audio.play();
    keyboardInput.value = keyboardInput.value + letterClicked;
  } else if (target.classList.contains("clickable-key2")) {
    var audio = document.getElementById("audio");
    audio.play();
    keyboardInput2.value = keyboardInput2.value + letterClicked;
  }

  if (keyboardInput.value.length == 1) {
    changeCase2();
  } else {
  }

  keyboardInput.focus();
};

function sendMessageFromLeft() {
  var keyboardInput = document.getElementById("keyboardinput");

  //messages coming from left
  var newMessage = document.createElement("div");
  newMessage.setAttribute("class", "message to");
  newMessage.innerHTML = keyboardInput.value;

  var newMessage2 = document.createElement("div");
  newMessage2.setAttribute("class", "message from");
  newMessage2.innerHTML = keyboardInput.value;

  //left iPhone
  var target1 = document.getElementById("messages-left");
  target1.appendChild(newMessage);
  target1.scrollTop = target1.scrollHeight;

  //right iPhone
  var target2 = document.getElementById("messages-right");
  target2.appendChild(newMessage2);
  target2.scrollTop = target2.scrollHeight;

  //clears input after message sent
  keyboardInput.value = "";
  var audio = document.getElementById("audio");
  audio.pause();
  var audio1 = document.getElementById("audio-sent");
  audio1.play();
}

function sendMessageFromRight() {
  var keyboardInput2 = document.getElementById("keyboardinput2");
  //messages coming from right
  var newMessageRight = document.createElement("div");
  newMessageRight.setAttribute("class", "message to");
  newMessageRight.innerHTML = keyboardInput2.value;

  var newMessageRight2 = document.createElement("div");
  newMessageRight2.setAttribute("class", "message from");
  newMessageRight2.innerHTML = keyboardInput2.value;
  //left iPhone
  var target12 = document.getElementById("messages-left");
  target12.appendChild(newMessageRight2);
  target12.scrollTop = target12.scrollHeight;

  //right iPhone
  var target12 = document.getElementById("messages-right");
  target12.appendChild(newMessageRight);
  target12.scrollTop = target12.scrollHeight;

  //clears input after message sent

  keyboardInput2.value = "";
  var audio = document.getElementById("audio");
  audio.pause();
  var audio1 = document.getElementById("audio-sent");
  audio1.play();
}

function add_space() {
  var keyboardInput = document.getElementById("keyboardinput");
  keyboardInput.value = keyboardInput.value + " ";
  var audio1 = document.getElementById("audio-space");
  audio1.play();
  var button = document.getElementById("123");
  if (button.classList.contains("pressed123")) {
    changekeylayout();
  } else {
  }
}

function back_space_left() {
  var audio1 = document.getElementById("audio-backspace");
  audio1.play();

  var arrayexit = document.getElementById("keyboardinput").value;

  for (var i = 0; i < arrayexit.length; i++) {
    var output = arrayexit.slice(0, -1);
    document.getElementById("keyboardinput").value = output;
  }
}

function back_space_right() {
  var audio1 = document.getElementById("audio-backspace");
  audio1.play();

  var arrayexit = document.getElementById("keyboardinput2").value;

  for (var i = 0; i < arrayexit.length; i++) {
    var output = arrayexit.slice(0, -1);
    document.getElementById("keyboardinput2").value = output;
  }
}

function changeCase2() {
  var checkLetter = document.getElementById("w");
  var button = document.getElementById("capitalizer");
  button.classList.toggle("pressed");

  var q = document.getElementById("q");
  var w = document.getElementById("w");
  var e = document.getElementById("e");
  var r = document.getElementById("r");
  var t = document.getElementById("t");
  var y = document.getElementById("y");
  var u = document.getElementById("u");
  var i = document.getElementById("i");
  var o = document.getElementById("o");
  var p = document.getElementById("p");
  var a = document.getElementById("a");
  var s = document.getElementById("s");
  var d = document.getElementById("d");
  var f = document.getElementById("f");
  var e = document.getElementById("e");
  var g = document.getElementById("g");
  var h = document.getElementById("h");
  var j = document.getElementById("j");
  var k = document.getElementById("k");
  var l = document.getElementById("l");
  var z = document.getElementById("z");
  var x = document.getElementById("x");
  var c = document.getElementById("c");
  var v = document.getElementById("v");
  var b = document.getElementById("b");
  var n = document.getElementById("n");
  var m = document.getElementById("m");

  if (button.classList.contains("pressed")) {
    q.innerHTML = "q";
    w.innerHTML = "w";
    e.innerHTML = "e";
    r.innerHTML = "r";
    t.innerHTML = "t";
    y.innerHTML = "y";
    u.innerHTML = "u";
    i.innerHTML = "i";
    o.innerHTML = "o";
    p.innerHTML = "p";
    a.innerHTML = "a";
    s.innerHTML = "s";
    d.innerHTML = "d";
    f.innerHTML = "f";
    g.innerHTML = "g";
    h.innerHTML = "h";
    j.innerHTML = "j";
    k.innerHTML = "k";
    l.innerHTML = "l";
    z.innerHTML = "z";
    x.innerHTML = "x";
    c.innerHTML = "c";
    v.innerHTML = "v";
    b.innerHTML = "b";
    n.innerHTML = "n";
    m.innerHTML = "m";
  } else {
    q.innerHTML = "Q";
    w.innerHTML = "W";
    e.innerHTML = "E";
    r.innerHTML = "R";
    t.innerHTML = "T";
    y.innerHTML = "Y";
    u.innerHTML = "U";
    i.innerHTML = "I";
    o.innerHTML = "O";
    p.innerHTML = "P";
    a.innerHTML = "A";
    s.innerHTML = "S";
    d.innerHTML = "D";
    f.innerHTML = "F";
    g.innerHTML = "G";
    h.innerHTML = "H";
    j.innerHTML = "J";
    k.innerHTML = "K";
    l.innerHTML = "L";
    z.innerHTML = "Z";
    x.innerHTML = "X";
    c.innerHTML = "C";
    v.innerHTML = "V";
    b.innerHTML = "B";
    n.innerHTML = "N";
    m.innerHTML = "M";
  }
}

function changekeylayout() {
  var button = document.getElementById("123");
  button.classList.toggle("pressed123");

  var q = document.getElementById("q");
  var w = document.getElementById("w");
  var e = document.getElementById("e");
  var r = document.getElementById("r");
  var t = document.getElementById("t");
  var y = document.getElementById("y");
  var u = document.getElementById("u");
  var i = document.getElementById("i");
  var o = document.getElementById("o");
  var p = document.getElementById("p");
  var a = document.getElementById("a");
  var s = document.getElementById("s");
  var d = document.getElementById("d");
  var f = document.getElementById("f");
  var e = document.getElementById("e");
  var g = document.getElementById("g");
  var h = document.getElementById("h");
  var j = document.getElementById("j");
  var k = document.getElementById("k");
  var l = document.getElementById("l");
  var z = document.getElementById("z");
  var x = document.getElementById("x");
  var c = document.getElementById("c");
  var v = document.getElementById("v");
  var b = document.getElementById("b");
  var n = document.getElementById("n");
  var m = document.getElementById("m");

  if (button.classList.contains("pressed123")) {
    button.innerHTML = "ABC";
    q.innerHTML = "1";
    w.innerHTML = "2";
    e.innerHTML = "3";
    r.innerHTML = "4";
    t.innerHTML = "5";
    y.innerHTML = "6";
    u.innerHTML = "7";
    i.innerHTML = "8";
    o.innerHTML = "9";
    p.innerHTML = "0";
    a.innerHTML = "-";
    s.innerHTML = "/";
    d.innerHTML = ":";
    f.innerHTML = ";";
    g.innerHTML = "(";
    h.innerHTML = ")";
    j.innerHTML = "$";
    k.innerHTML = "&";
    l.innerHTML = "@";
    z.innerHTML = '"';
    x.innerHTML = ".";
    c.innerHTML = ",";
    v.innerHTML = "?";
    b.innerHTML = "!";
    n.innerHTML = "'";
    m.innerHTML = "m";
  } else {
    button.innerHTML = "123";
    q.innerHTML = "Q";
    w.innerHTML = "W";
    e.innerHTML = "E";
    r.innerHTML = "R";
    t.innerHTML = "T";
    y.innerHTML = "Y";
    u.innerHTML = "U";
    i.innerHTML = "I";
    o.innerHTML = "O";
    p.innerHTML = "P";
    a.innerHTML = "A";
    s.innerHTML = "S";
    d.innerHTML = "D";
    f.innerHTML = "F";
    g.innerHTML = "G";
    h.innerHTML = "H";
    j.innerHTML = "J";
    k.innerHTML = "K";
    l.innerHTML = "L";
    z.innerHTML = "Z";
    x.innerHTML = "X";
    c.innerHTML = "C";
    v.innerHTML = "V";
    b.innerHTML = "B";
    n.innerHTML = "N";
    m.innerHTML = "M";
  }
}
