export default function getEmoji({ title }: { title: string }) {
  const lower = title.toLowerCase();

  if (lower.includes("web") || lower.includes("dev")) return "💻";
  if (lower.includes("maintenance")) return "🛠️";
  if (lower.includes("audit") || lower.includes("conseil")) return "🔍";
  if (lower.includes("finance")) return "💸";

  return "✨"; // par défaut
}
