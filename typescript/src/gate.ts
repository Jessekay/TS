interface ProductStock {
  readonly sku: string;
  quantity: number;
  tags: string[];
}

function updateInventory(
  items: ProductStock[],
  adjustments: [string, number][],
  onLowStock: (sku: string) => void): Record<string, number>{
  const lookup: Record<string, number> = {};

  for (const item of items) {
    item.tags.push("checked");
    lookup[item.sku] = item.quantity;
  }

  for (const [sku, delta] of adjustments) {
    lookup[sku] = (lookup[sku] ?? 0) + delta;
    if (lookup[sku] < 5) {
      onLowStock(sku);
    }
  }

  return lookup;
}

const finalStock = updateInventory(
  [
    { sku: "KB-01", quantity: 10, tags: ["hardware"] },
    { sku: "MS-02", quantity: 6, tags: ["peripherals"] },
  ],
  [
    ["KB-01", -7],
    ["MS-02", 4],
  ],
  (sku) => {
    console.log("Restock needed for:", sku);
  }
);