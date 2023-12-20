return {{data}}.map(record => {
  return {
    ...record,
    date_time: moment(record.date_time),
  };
})
.sort((a, b) => b.date_time.valueOf() - a.date_time.valueOf());