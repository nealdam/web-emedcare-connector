

export function isAllowedLoginDomain(email) {
  const address = email.split('@').pop();

  if (process.env.allowedLoginDomain.localeCompare(address) === 0) return true

  return false
}