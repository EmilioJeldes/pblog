const setClassPriority = (priority, classes) => {
  switch (priority) {
    case null: {
      return classes.topSuccess;
    }
    case 'HIGH':
      return classes.topWarning;
    case 'MEDIUM':
      return classes.topPrecaution;
    case 'REALLY_HIGH':
      return classes.topDanger;
    case 'LOW':
      return classes.topSuccess;
    default:
      return classes.topSuccess;
  }
};

const priorities = [
  { type: 'HIGH', translate: 'Alta' },
  { type: 'REALLY_HIGH', translate: 'Muy Alta' },
  { type: 'MEDIUM', translate: 'Media' },
  { type: 'LOW', translate: 'Baja' }
];

export { setClassPriority, priorities };
