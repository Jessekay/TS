type Student = {
  id: number;
  name: string;
  scores: number[];
};

const students: Student[] = [
  { id: 1, name: "Amina", scores: [90, 85, 77] },
  { id: 2, name: "Kofi", scores: [60, 70, 65] },
  { id: 3, name: "Zawadi", scores: [] },
  { id: 4, name: "Jean", scores: [100, 95] },
];

const levels = ["fail", "pass", "merit", "distinction"] as const;