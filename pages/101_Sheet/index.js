Page({
  data: {
    weekdays: ['月曜日・Mon', '火曜日・Tue', '水曜日・Wed', '木曜日・Thu', '金曜日・Fri', '土曜日・Sat', '日曜日・Sun'],
    selectedDay: 0,
    timeSlots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    bookings: [
      {}, {}, {}, {}, {}, {}, {} // 7个对象，每个对应一天
    ],
    roomId: ''
  },

  onLoad: function(options) {
    if (options && options.id) {
      this.setData({ roomId: options.id });
    }
    // 这里可以添加从服务器获取预约信息的逻辑
  },

  onDayChange: function(e) {
    this.setData({
      selectedDay: e.detail.value
    });
  },

  onNameInput: function(e) {
    const time = e.currentTarget.dataset.time;
    const name = e.detail.value;
    const day = this.data.selectedDay;
    
    // 更新特定日期的预约信息
    let newBookings = [...this.data.bookings];
    newBookings[day][time] = name;
    
    this.setData({
      bookings: newBookings
    });
    
    // 这里可以添加将预约信息发送到服务器的逻辑
  },

  goBack: function() {
    wx.navigateBack({
      delta: 1
    });
  }
});