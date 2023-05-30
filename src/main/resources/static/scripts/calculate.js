const submit = document.getElementById("submit");

const progressAPlusTag = document.getElementById("a+");
const progressATag = document.getElementById("a");
const progressAMinusTag = document.getElementById("a-");
const progressBPlusTag = document.getElementById("b+");
const progressBTag = document.getElementById("b");
const progressBMinusTag = document.getElementById("b-");
const progressCPlusTag = document.getElementById("c+");
const progressCTag = document.getElementById("c");
const progressCMinusTag = document.getElementById("c-");
const progressDTag = document.getElementById("d");
const progressFTag = document.getElementById("f");

const APlusSpanTag = document.getElementById("A+Value");
const ASpanTag = document.getElementById("AValue");
const AMinusSpanTag = document.getElementById("A-Value");
const BPlusSpanTag = document.getElementById("B+Value");
const BSpanTag = document.getElementById("BValue");
const BMinusSpanTag = document.getElementById("B-Value");
const CPlusSpanTag = document.getElementById("C+Value");
const CSpanTag = document.getElementById("CValue");
const CMinusSpanTag = document.getElementById("C-Value");
const DspanTag = document.getElementById("DValue");
const FSpanTag = document.getElementById("FValue");

const inputValueTag = document.getElementById("grade");
const errorContainer = document.getElementById("error");

function histogramHandler(event) {
  event.preventDefault();

  const valueMax = document.getElementById("Max").value;
  const valueAPlus = document.getElementById("A+").value;
  const valueA = document.getElementById("A").value;
  const valueAMinus = document.getElementById("A-").value;
  const valueBPlus = document.getElementById("B+").value;
  const valueB = document.getElementById("B").value;
  const valueBMinus = document.getElementById("B-").value;
  const valueCPlus = document.getElementById("C+").value;
  const valueC = document.getElementById("C").value;
  const valueCMinus = document.getElementById("C-").value;
  const valueD = document.getElementById("D").value;
  const valueF = document.getElementById("F").value;

  const inputValue = parseInt(inputValueTag.value);
  if (!isNaN(inputValue)) {
    errorContainer.textContent = "";
  } else {
    errorContainer.textContent = "Input must be valid Number";
    return;
  }

  if (inputValue > valueMax) {
    errorContainer.textContent = `you can not exceed ${valueMax}`;
  } else if (inputValue <= valueMax && inputValue >= valueAPlus) {
    progressAPlusTag.value++;
    APlusSpanTag.textContent = progressAPlusTag.value;
  } else if (inputValue < valueAPlus && inputValue >= valueA) {
    progressATag.value++;
    ASpanTag.textContent = progressATag.value;
  } else if (inputValue < valueA && inputValue >= valueAMinus) {
    progressAMinusTag.value++;
    AMinusSpanTag.textContent = progressAMinusTag.value;
  } else if (inputValue < valueAMinus && inputValue >= valueBPlus) {
    progressBPlusTag.value++;
    BPlusSpanTag.textContent = progressBPlusTag.value;
  } else if (inputValue < valueBPlus && inputValue >= valueB) {
    progressBTag.value++;
    BSpanTag.textContent = progressBTag.value;
  } else if (inputValue < valueB && inputValue >= valueBMinus) {
    progressBMinusTag.value++;
    BMinusSpanTag.textContent = progressBMinusTag.value;
  } else if (inputValue < valueBMinus && inputValue >= valueCPlus) {
    progressCPlusTag.value++;
    CPlusSpanTag.textContent = progressCPlusTag.value;
  } else if (inputValue < valueCPlus && inputValue >= valueC) {
    progressCTag.value++;
    CSpanTag.textContent = progressCTag.value;
  } else if (inputValue < valueC && inputValue >= valueCMinus) {
    progressCMinusTag.value++;
    CMinusSpanTag.textContent = progressCMinusTag.value;
  } else if (inputValue < valueCMinus && inputValue >= valueD) {
    progressDTag.value++;
    DspanTag.textContent = progressDTag.value;
  } else if (inputValue < valueD && inputValue >= valueF) {
    progressFTag.value++;
    FSpanTag.textContent = progressFTag.value;
  } else {
    errorContainer.textContent = `It can not be less than 0`;
  }
}
submit.addEventListener("click", histogramHandler);
