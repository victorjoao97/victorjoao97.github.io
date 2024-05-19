class BasicsResume {
  startDate: Date
  endDate?: Date
  title: string
  location: string
  description: string
  id?: string
  constructor(
    startDate: Date,
    title: string,
    location: string,
    description: string,
    endDate?: Date
  ) {
    this.startDate = startDate
    this.title = title
    this.location = location
    this.description = description
    this.endDate = endDate
    this.id = new Date().getTime().toString()
  }
}

export class Experience extends BasicsResume {
  constructor(
    startDate: Date,
    title: string,
    location: string,
    description: string,
    endDate?: Date
  ) {
    super(startDate, title, location, description, endDate)
  }
}

export class Education extends BasicsResume {
  name: string
  constructor(
    startDate: Date,
    title: string,
    location: string,
    description: string,
    name: string,
    endDate?: Date
  ) {
    super(startDate, title, location, description, endDate)
    this.name = name
  }
}

export class Project {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string
  ) {}
}

export const FeedbackValidation = {
  NAME_REQUIRED: 'name:required',
  EMAIL_REQUIRED: 'email:required',
  EMAIL_INVALID: 'email:invalid',
  PHONE_REQUIRED: 'phone:required',
  MESSAGE_REQUIRED: 'message:required'
}
