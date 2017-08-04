interface Address {
  city: string
  line1: string
  line2: string
  state: string
  zip: string
}

interface OfficialChannel {
  id: string
  type: string
}

interface Official {
  address: Array<Address>
  channels: Array<OfficialChannel>
  name: string
  party: string
  phones: Array<string>
  photoUrl: string
  urls: Array<string>
}

interface Office {
  divisionId: string
  levels?: Array<string>
  name: string
  officialIndices: Array<number>
  roles: Array<string>
}

interface Division {
  name: string
  officeIndices: Array<number>
}

interface DivisionData {
  divisionKey: string
  data: DivisionData
}

export {
  Official, 
  Office, 
  Division
}
