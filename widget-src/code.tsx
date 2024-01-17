const { widget } = figma;
const {
  AutoLayout,
  Ellipse,
  Frame,
  Image,
  Rectangle,
  SVG,
  Text,
  useSyncedState,
} = widget;

function Widget() {
  const [pinkBlock, addPinkB] = useSyncedState("pinkBlock", 50);
  const [blueBlock, addBlueB] = useSyncedState("blueBlock", 50);
  const [PyPos, addPY] = useSyncedState("PyPos", 450);
  const [ByPos, addBY] = useSyncedState("ByPos", 450);
  const [pinkCount, addPcount] = useSyncedState("pinkCount", 1);
  const [blueCount, addBcount] = useSyncedState("blueCount", 1);
  return (
    <Frame
      name="Widget"
      overflow="visible"
      width={500}
      height={500}
      fill="#fff"
    >
      <Text
        fontSize={32}
        horizontalAlignText="center"
        verticalAlignText="center"
      >
        Vote
      </Text>
      <AutoLayout
        name="pinkBar"
        fill="#FFC0CB"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 5,
          },
          blur: 15,
          showShadowBehindNode: false,
        }}
        x={500 / 5} // One-third of the x-axis
        y={PyPos}
        height={pinkBlock}
        width={50}
      >
        <Text fontSize={32} horizontalAlignText="center">
          {pinkCount}
        </Text>
      </AutoLayout>
      <AutoLayout
        name="blueBar"
        fill="#ADD8E6"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 5,
          },
          blur: 15,
          showShadowBehindNode: false,
        }}
        x={500 / 1.5} // One-third of the x-axis
        y={ByPos}
        height={blueBlock}
        width={50}
      >
        <Text fontSize={32} horizontalAlignText={"center"}>
          {blueCount}
        </Text>
      </AutoLayout>
      <Rectangle
        name="vote-button"
        fill="#fff"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 5,
          },
          blur: 15,
          showShadowBehindNode: false,
        }}
        x={500 / 5}
        y={550}
        height={50}
        width={50}
        onClick={() => {
          if (pinkBlock >= 500) {
            addPinkB(50);
            addPY(450);
            addPcount(1);
          } else {
            addPinkB(pinkBlock + 50);
            addPY(PyPos - 50);
            addPcount(pinkCount + 1);
          }
        }}
      />
      <Rectangle
        name="vote-button"
        fill="#fff"
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 5,
          },
          blur: 15,
          showShadowBehindNode: false,
        }}
        x={500 / 1.5}
        y={550}
        height={50}
        width={50}
        onClick={() => {
          if (blueBlock >= 500) {
            addBlueB(50);
            addBY(450);
            addBcount(1);
          } else {
            addBlueB(blueBlock + 50);
            addBY(ByPos - 50);
            addBcount(blueCount + 1);
          }
        }}
      />
    </Frame>
  );
}
widget.register(Widget);
