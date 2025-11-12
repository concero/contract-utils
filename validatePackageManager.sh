#!/usr/bin/env sh
set -eu

case "${PWD}" in
  *"/node_modules/"*|*"/node_modules") exit 0 ;;
esac
if [ "${INIT_CWD:-$PWD}" != "$PWD" ]; then
  exit 0
fi

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <allowed_pm1> [allowed_pm2 ...]" >&2
  exit 2
fi

UA="${npm_config_user_agent:-}"
PM="$(printf '%s' "${UA%%/*}" | tr '[:upper:]' '[:lower:]')"

ok=false
for allowed in "$@"; do
  allowed="$(printf '%s' "$allowed" | tr '[:upper:]' '[:lower:]')"
  [ "$PM" = "$allowed" ] && ok=true && break
done

if [ "$ok" = true ]; then
  exit 0
fi

echo "🚫 Use: $* to install dependencies." >&2
echo "Detected user agent: '${UA:-unknown}'" >&2
exit 1
