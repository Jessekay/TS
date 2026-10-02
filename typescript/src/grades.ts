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

function average(scores: readonly number[]): number {
  if (scores.length === 0) return 0;
  const total = scores.reduce((sum, n) => sum + n, 0);
  return total / scores.length;
}

function findStudent(students: readonly Student[], id: number): Student | undefined {
  return students.find(s => s.id === id);
}
