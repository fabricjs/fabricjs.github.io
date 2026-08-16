const debounce = (fn, timeout) => {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, timeout);
    return timeoutId;
  };
};

const canvas = new fabric.Canvas(canvasEl);

const emojiNumbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

let intersecting = false;

let index = 2;
const indexSelectEl = document.getElementById("index");
indexSelectEl.addEventListener("change", (e) => {
  index = parseInt(e.target.value, 10) - 1;
});

const objects = await Promise.all(
  emojiNumbers.map(async (emoji, i) => {
    const emojiDecoration = `<svg viewBox="0 0 128 128" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"><text x="63.5" y="110" alignment-baseline="text-top" dominant-baseline="text-top" text-anchor="middle" font-size="123px">${emoji}</text></svg>`;
    const { objects, options } = await fabric.loadSVGFromString(
      emojiDecoration
    );

    const shape = fabric.util.groupSVGElements(objects, options);
    shape.set({
      left: 50 + i * 75,
      top: 50 + i * 50,
      width: 128,
      height: 128,
      shadow: new fabric.Shadow({
        color: "rgba(0,0,0,0.5)",
        offsetY: 5,
        blur: 10,
      }),
    });

    canvas.add(shape);

    return shape;
  })
);

const bringObjectForward_Btn = document.getElementById("bringObjectForward");
bringObjectForward_Btn.onclick = function () {
  canvas.bringObjectForward(objects[index], intersecting);
};
const sendObjectBackwards_Btn = document.getElementById("sendObjectBackwards");
sendObjectBackwards_Btn.onclick = function () {
  canvas.sendObjectBackwards(objects[index], intersecting);
};
const intersecting_Checkbox = document.getElementById("intersecting");
intersecting_Checkbox.addEventListener("change", (e) => {
  intersecting = e.target.checked;
});

const bringObjectToFront_Btn = document.getElementById("bringObjectToFront");
bringObjectToFront_Btn.onclick = function () {
  canvas.bringObjectToFront(objects[index]);
};

// todo: negative numbers actually "work", as they are passed to `splice`, but that
// behavior seems confusing and unwanted -- or at least should be documented?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#start
const moveObjectTo_Btn = document.getElementById("moveObjectTo");
moveObjectTo_Btn.onclick = function () {
  const currentIndex = canvas._objects.findIndex((o) => o === objects[index]);
  const userInput = prompt("moveObjectTo", currentIndex);
  const stackIndex = parseInt(userInput, 10);
  const invalid = !(stackIndex > -1);
  if (userInput !== stackIndex.toString()) {
    console.log(
      `Changed "${userInput}" to "${stackIndex}"` +
        (invalid ? ", invalid input" : "")
    );
  } else if (invalid) {
    console.log("ignoring", userInput);
  }
  if (invalid) return;
  canvas.moveObjectTo(objects[index], stackIndex);
};

const sendObjectToBack_Btn = document.getElementById("sendObjectToBack");
sendObjectToBack_Btn.onclick = function () {
  canvas.sendObjectToBack(objects[index]);
};

const preserveObjectStacking_Checkbox = document.getElementById(
  "preserveObjectStacking"
);
preserveObjectStacking_Checkbox.addEventListener("change", (e) => {
  canvas.preserveObjectStacking = e.target.checked;
});

const stackInfo_P = document.getElementById("stackInfo");
const debouncedAfterRender = debounce((e) => {
  stackInfo_P.textContent = canvas._objects.map((obj) => obj.text).join(", ");

  const activeObjects = canvas
    .getActiveObjects()
    .map((obj) => emojiNumbers.indexOf(obj.text));
  console.log("activeObjects", activeObjects);
  if (activeObjects.length !== 1) return;
  const activeObject = activeObjects[0];
  if (index === activeObject) return;
  index = activeObject;
  indexSelectEl.value = `${index + 1}`;
}, 100);
canvas.on("after:render", debouncedAfterRender);
