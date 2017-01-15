var calendar = {

	init: function(ajax) {

		if (ajax) {

      // ajax call to print json
      $.ajax({
  				url: 'http://raw.githubusercontent.com/philipehsing/jQuery.Simple-Event-Calendar/master/demo/data/events.json',
  				type: 'GET',
  			})
  			.done(function(data) {
          var events = data.events;
          events = [{
    "month": "1",
    "day": "12",
    "year": "2017",
    "title": "Lorem ipsum00",
	"date": "Сегодня",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "1 из 2 событий 12 января"
  },
  {
    "month": "1",
    "day": "12",
    "year": "2017",
	"date": "Сегодня",
	"title": "Lorem9999 ipsum",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "2 из 2 событий 12 сентября"
  },
  {
    "month": "1",
    "day": "9",
    "year": "2017",
	"date": "Завтра",
    "title": "Lorem ipsu1m11",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "1 из 1 событий 9 января"
  },
  {
    "month": "1",
    "day": "15",
    "year": "2017",
    "title": "Мастер класс Ильи Зайцева",
	"date": "15 сентября",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "1 из 3 событий сегодня"
  },
  {
    "month": "1",
    "day": "15",
    "year": "2017",
    "title": "Lorem ipsum67",
	"date": "15 сентября",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "2 из 3 событий сегодня"
  },
  {
    "month": "1",
    "day": "15",
    "year": "2017",
    "title": "Lorem3 ipsum",
	"date": "15 сентября",
	"image": "/jobincamp/image/base/useful-example.png",
    "count": "3 из 3 событий сегодня"
  }]
          // loop json & append to dom
		  var today = new Date();
		  var day = today.getDate();
		  var month = today.getMonth()+1;
		  var year = today.getYear();
          for (var i = 0; i < events.length; i++) {
			$('.list').append('<div class="day-event" date-day="'+ events[i].day +'" date-month="' + events[i].month +'" date-year="'+ events[i].year +'" data-number="'+ i +'"><p class="b-calendar__date">'+ events[i].date +'</p><img class="b-calendar__image" src="' + events[i].image + '"><p class="b-calendar__event-title">'+ events[i].title +'</p><p class="b-calendar__count-event">'+ events[i].count +'</p></div>');
		  }
		  for (var i = 0; i < events.length; i++) {
			$('.origin-list').append('<div class="origin-day-event" date-day="'+ events[i].day +'" date-month="' + events[i].month +'" date-year="'+ events[i].year +'" data-number="'+ i +'"><p class="b-calendar__date">'+ events[i].date +'</p><img class="b-calendar__image" src="' + events[i].image + '"><p class="b-calendar__event-title">'+ events[i].title +'</p><p class="b-calendar__count-event">'+ events[i].count +'</p></div>');
		  }
            
          // start calendar
          calendar.startCalendar();

          $('.day-event[date-month="' + 1 + '"][date-day="' + 15 + '"]').show();
		  $('.day-event[date-month="' + 1 + '"][date-day="' + 15 + '"]').addClass('active');
		  $(".owl-carousel").owlCarousel({items: 1, loop:true, nav:true, dots:false, navText: ["<",">"]});
  			})
  			.fail(function(data) {
  				console.log(data);
  			});
		} else {

      // if not using ajax start calendar
      calendar.startCalendar();
    }

	},

  startCalendar: function() {
    var mon = 'Mon';
		var tue = 'Tue';
		var wed = 'Wed';
		var thur = 'Thur';
		var fri = 'Fri';
		var sat = 'Sat';
		var sund = 'Sun';

		/**
		 * Get current date
		 */
		var d = new Date();
		var strDate = yearNumber + "/" + (d.getMonth() + 1) + "/" + d.getDate();
		var yearNumber = (new Date).getFullYear();
		/**
		 * Get current month and set as '.current-month' in title
		 */
		var monthNumber = d.getMonth() + 1;

		function GetMonthName(monthNumber) {
			var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
			return months[monthNumber - 1];
		}

		setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund);

		function setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund) {
			$('.month').text(GetMonthName(monthNumber) + ' ' + yearNumber);
			$('.month').attr('data-month', monthNumber);
			printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund);
		}

		$('.btn-next').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber > 11) {
				$('.month').attr('data-month', '0');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber + 1;
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		$('.btn-prev').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber < 2) {
				$('.month').attr('data-month', '13');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber - 1;
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		/**
		 * Get all dates for current month
		 */

		function printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund) {

			$($('tbody.event-calendar tr')).each(function(index) {
				$(this).empty();
			});

			$($('thead.event-days tr')).each(function(index) {
				$(this).empty();
			});

			function getDaysInMonth(month, year) {
				// Since no month has fewer than 28 days
				var date = new Date(year, month, 1);
				var days = [];
				while (date.getMonth() === month) {
					days.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}
				return days;
			}

			i = 0;

			setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

			function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
				var monthDay = getDaysInMonth(monthNumber - 1, yearNumber)[0].toString().substring(0, 3);
				if (monthDay === 'Mon') {
					$('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
				} else if (monthDay === 'Tue') {
					$('thead.event-days tr').append('<td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td>');
				} else if (monthDay === 'Wed') {
					$('thead.event-days tr').append('<td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td>');
				} else if (monthDay === 'Thu') {
					$('thead.event-days tr').append('<td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td>');
				} else if (monthDay === 'Fri') {
					$('thead.event-days tr').append('<td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td>');
				} else if (monthDay === 'Sat') {
					$('thead.event-days tr').append('<td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td>');
				} else if (monthDay === 'Sun') {
					$('thead.event-days tr').append('<td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td>');
				}
			};
			$(getDaysInMonth(monthNumber - 1, yearNumber)).each(function(index) {
				var index = index + 1;
				if (index < 8) {
					$('tbody.event-calendar tr.1').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span class="calendar-date">'+ index + '</span></td>');
				} else if (index < 15) {
					$('tbody.event-calendar tr.2').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span class="calendar-date">'+ index + '</span></td>');
				} else if (index < 22) {
					$('tbody.event-calendar tr.3').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span class="calendar-date">'+ index + '</span></td>');
				} else if (index < 29) {
					$('tbody.event-calendar tr.4').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span class="calendar-date">'+ index + '</span></td>');
				} else if (index < 32) {
					$('tbody.event-calendar tr.5').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span class="calendar-date">'+ index + '</span></td>');
				}
				i++;
			});
			var date = new Date();
			var month = date.getMonth() + 1;
			var thisyear = new Date().getFullYear();
			setCurrentDay(month, thisyear);
			setEvent();
			displayEvent();
		}

		/**
		 * Get current day and set as '.current-day'
		 */
		function setCurrentDay(month, year) {
			var viewMonth = $('.month').attr('data-month');
			var eventYear = $('.event-days').attr('date-year');
			if (parseInt(year) === yearNumber) {
				if (parseInt(month) === parseInt(viewMonth)) {
					$('tbody.event-calendar td[date-day="' + d.getDate() + '"]').addClass('current-day');
				}
			}
		};

		/**
		 * Add class '.active' on calendar date
		 */
		$('tbody td').on('click', function(e) {
			if ($(this).hasClass('event')) {
				$('tbody.event-calendar td').removeClass('active');
				$(this).addClass('active');
			} else {
				$('tbody.event-calendar td').removeClass('active');
			};
		});

		/**
		 * Add '.event' class to all days that has an event
		 */
		function setEvent() {
			$('.day-event').each(function(i) {
				var eventMonth = $(this).attr('date-month');
				var eventDay = $(this).attr('date-day');
				var eventYear = $(this).attr('date-year');
				var eventClass = $(this).attr('event-class');
				if (eventClass === undefined) eventClass = 'event';
				else eventClass = 'event ' + eventClass;

				if (parseInt(eventYear) === yearNumber) {
					$('tbody.event-calendar tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass(eventClass);
				}
			});
		};

		/**
		 * Get current day on click in calendar
		 * and find day-event to display
		 */
		function displayEvent() {
			$('tbody.event-calendar td').on('click', function(e) {
				var monthEvent = $(this).attr('date-month');
				var dayEvent = $(this).text();
				if (!$('.origin-day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').length) {
					return
				}
			    var $origin = $('.origin-list').html();
                $('.list').html($origin);
				$('.list .origin-day-event').removeClass('origin-day-event').addClass('day-event active');
				$('.owl-carousel').removeClass('owl-loaded owl-drag');
				$('.day-event').hide();
				$('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').show();
				$('.day-event').removeClass('active');
				$('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').addClass('active');
                $('.owl-carousel').trigger('destroy.owl.carousel');
                $('.owl-carousel').owlCarousel({items: 1, loop:true, nav:true, dots:false, navText: ["<",">"]});
			});
		};

		/**
		 * Close day-event
		 */
		$('.close').on('click', function(e) {
			$(this).parent().slideUp('fast');
		});

		/**
		 * Save & Remove to/from personal list
		 */
		$('.save').click(function() {
			if (this.checked) {
				$(this).next().text('Remove from personal list');
				var eventHtml = $(this).closest('.day-event').html();
				var eventMonth = $(this).closest('.day-event').attr('date-month');
				var eventDay = $(this).closest('.day-event').attr('date-day');
				var eventNumber = $(this).closest('.day-event').attr('data-number');
				$('.person-list').append('<div class="day" date-month="' + eventMonth + '" date-day="' + eventDay + '" data-number="' + eventNumber + '" style="display:none;">' + eventHtml + '</div>');
				$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').slideDown('fast');
				$('.day').find('.close').remove();
				$('.day').find('.save').removeClass('save').addClass('remove');
				$('.day').find('.remove').next().addClass('hidden-print');
				remove();
				sortlist();
			} else {
				$(this).next().text('Save to personal list');
				var eventMonth = $(this).closest('.day-event').attr('date-month');
				var eventDay = $(this).closest('.day-event').attr('date-day');
				var eventNumber = $(this).closest('.day-event').attr('data-number');
				$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
				setTimeout(function() {
					$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
				}, 1500);
			}
		});

		function remove() {
			$('.remove').click(function() {
				if (this.checked) {
					$(this).next().text('Remove from personal list');
					var eventMonth = $(this).closest('.day').attr('date-month');
					var eventDay = $(this).closest('.day').attr('date-day');
					var eventNumber = $(this).closest('.day').attr('data-number');
					$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
					$('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('.save').attr('checked', false);
					$('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('span').text('Save to personal list');
					setTimeout(function() {
						$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
					}, 1500);
				}
			});
		}

		/**
		 * Sort personal list
		 */
		function sortlist() {
			var personList = $('.person-list');

			personList.find('.day').sort(function(a, b) {
				return +a.getAttribute('date-day') - +b.getAttribute('date-day');
			}).appendTo(personList);
		}

		/**
		 * Print button
		 */
		$('.print-btn').click(function() {
			window.print();
		});
  },

};

$(document).ready(function() {
	calendar.init('ajax');
});
