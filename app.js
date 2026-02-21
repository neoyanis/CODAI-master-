app.jsfunction downloadCode() {
  const code = document.getElementById("code").textContent;
  const lang = document.getElementById("lang").value;

  const ext = {
    verilog: "v",
    vhdl: "vhd",
    arduino: "ino",
    cpp: "cpp",
    html: "html"
  }[lang];

  const blob = new Blob([code], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `program.${ext}`;
  a.click();
}
