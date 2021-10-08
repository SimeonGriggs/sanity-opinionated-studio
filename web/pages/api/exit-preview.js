export default function exit(req, res) {
  res.clearPreviewData()

  res.redirect(307, req?.query?.slug ?? '/')
}
