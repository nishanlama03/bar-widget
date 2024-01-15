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
  const [PyPos, addPY] = useSyncedState("PyPos", 150);
  const [ByPos, addBY] = useSyncedState("ByPos", 150);
  return (
    <Frame
      name="Widget"
      overflow="visible"
      width={500}
      height={200}
      fill="#fff"
    >
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
        width={"fill-parent"}
      >
        <Text fontSize={32} horizontalAlignText="center">
          Pink
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
        width={"fill-parent"}
      >
        <Text fontSize={32} horizontalAlignText="center">
          Blue
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
        y={220}
        height={50}
        width={50}
        onClick={() => {
          addPinkB(pinkBlock + 50);
          addPY(PyPos - 50);
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
        y={220}
        height={50}
        width={50}
        onClick={() => {
          addBlueB(blueBlock + 50);
          addBY(ByPos - 50);
        }}
      />
      <Text fontSize={32} horizontalAlignText="center">
        Vote
      </Text>
    </Frame>
  );
}
widget.register(Widget);
