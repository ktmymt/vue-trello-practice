import { IList } from "@/types";

export function createInitialLists(): IList[] {
  return [
    {
      id: 1,
      name: "List 1",
      cards: [
        {
          id: 1,
          text: "Task 1"
        },
        {
          id: 2,
          text: "Task 2"
        }
      ]
    },
    {
      id: 2,
      name: "List 2",
      cards: [
        {
          id: 3,
          text: "Task 3"
        },
        {
          id: 4,
          text: "Task 4"
        }
      ]
    }
  ];
}
