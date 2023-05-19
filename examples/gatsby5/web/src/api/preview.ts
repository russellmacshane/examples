export default function API(req, res) {
  const path = req.query ? req.query["path"] : "/";
  const host = process.env.GATSBY_HOST;
  const redirectUrl = `${host}${path}/?is_incontext_editing_mode=true`;
  res.redirect(redirectUrl);
}
