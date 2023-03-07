export function main() {
  function getDayWeek() {
    return new Date().getDay();
  }

  let day = getDayWeek();

  switch (day) {
    case 5:
      console.log("Friday");
      break;
    default:
      console.log("outro dia");
  }
}

main();
