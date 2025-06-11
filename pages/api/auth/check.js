export default function handler(req, res) {
  const session = req.cookies.session_user;

  if (!session) {
    return res.status(401).json({ ok: false });
  }

  return res.status(200).json({ ok: true });
}
