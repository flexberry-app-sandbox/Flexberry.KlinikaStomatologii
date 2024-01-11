import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKlinika_StomatologiiДолжностьLForm from './forms/i-i-s-klinika-stomatologii-должность-l';
import IISKlinika_StomatologiiЗаписьLForm from './forms/i-i-s-klinika-stomatologii-запись-l';
import IISKlinika_StomatologiiКабинетLForm from './forms/i-i-s-klinika-stomatologii-кабинет-l';
import IISKlinika_StomatologiiКлиентLForm from './forms/i-i-s-klinika-stomatologii-клиент-l';
import IISKlinika_StomatologiiМатериалLForm from './forms/i-i-s-klinika-stomatologii-материал-l';
import IISKlinika_StomatologiiОплатаLForm from './forms/i-i-s-klinika-stomatologii-оплата-l';
import IISKlinika_StomatologiiПроизводительLForm from './forms/i-i-s-klinika-stomatologii-производитель-l';
import IISKlinika_StomatologiiСотрудникLForm from './forms/i-i-s-klinika-stomatologii-сотрудник-l';
import IISKlinika_StomatologiiУслугаLForm from './forms/i-i-s-klinika-stomatologii-услуга-l';
import IISKlinika_StomatologiiДолжностьEForm from './forms/i-i-s-klinika-stomatologii-должность-e';
import IISKlinika_StomatologiiЗаписьEForm from './forms/i-i-s-klinika-stomatologii-запись-e';
import IISKlinika_StomatologiiКабинетEForm from './forms/i-i-s-klinika-stomatologii-кабинет-e';
import IISKlinika_StomatologiiКлиентEForm from './forms/i-i-s-klinika-stomatologii-клиент-e';
import IISKlinika_StomatologiiМатериалEForm from './forms/i-i-s-klinika-stomatologii-материал-e';
import IISKlinika_StomatologiiОплатаEForm from './forms/i-i-s-klinika-stomatologii-оплата-e';
import IISKlinika_StomatologiiПроизводительEForm from './forms/i-i-s-klinika-stomatologii-производитель-e';
import IISKlinika_StomatologiiСотрудникEForm from './forms/i-i-s-klinika-stomatologii-сотрудник-e';
import IISKlinika_StomatologiiУслугаEForm from './forms/i-i-s-klinika-stomatologii-услуга-e';
import IISKlinika_StomatologiiДокументыModel from './models/i-i-s-klinika-stomatologii-документы';
import IISKlinika_StomatologiiДолжностьModel from './models/i-i-s-klinika-stomatologii-должность';
import IISKlinika_StomatologiiЗаписьModel from './models/i-i-s-klinika-stomatologii-запись';
import IISKlinika_StomatologiiКабинетModel from './models/i-i-s-klinika-stomatologii-кабинет';
import IISKlinika_StomatologiiКлиентModel from './models/i-i-s-klinika-stomatologii-клиент';
import IISKlinika_StomatologiiМатериалModel from './models/i-i-s-klinika-stomatologii-материал';
import IISKlinika_StomatologiiОказаниеУслугModel from './models/i-i-s-klinika-stomatologii-оказание-услуг';
import IISKlinika_StomatologiiОплатаModel from './models/i-i-s-klinika-stomatologii-оплата';
import IISKlinika_StomatologiiПроизводительModel from './models/i-i-s-klinika-stomatologii-производитель';
import IISKlinika_StomatologiiСоставУслугиModel from './models/i-i-s-klinika-stomatologii-состав-услуги';
import IISKlinika_StomatologiiСотрудникModel from './models/i-i-s-klinika-stomatologii-сотрудник';
import IISKlinika_StomatologiiУслугаModel from './models/i-i-s-klinika-stomatologii-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-klinika-stomatologii-документы': IISKlinika_StomatologiiДокументыModel,
    'i-i-s-klinika-stomatologii-должность': IISKlinika_StomatologiiДолжностьModel,
    'i-i-s-klinika-stomatologii-запись': IISKlinika_StomatologiiЗаписьModel,
    'i-i-s-klinika-stomatologii-кабинет': IISKlinika_StomatologiiКабинетModel,
    'i-i-s-klinika-stomatologii-клиент': IISKlinika_StomatologiiКлиентModel,
    'i-i-s-klinika-stomatologii-материал': IISKlinika_StomatologiiМатериалModel,
    'i-i-s-klinika-stomatologii-оказание-услуг': IISKlinika_StomatologiiОказаниеУслугModel,
    'i-i-s-klinika-stomatologii-оплата': IISKlinika_StomatologiiОплатаModel,
    'i-i-s-klinika-stomatologii-производитель': IISKlinika_StomatologiiПроизводительModel,
    'i-i-s-klinika-stomatologii-состав-услуги': IISKlinika_StomatologiiСоставУслугиModel,
    'i-i-s-klinika-stomatologii-сотрудник': IISKlinika_StomatologiiСотрудникModel,
    'i-i-s-klinika-stomatologii-услуга': IISKlinika_StomatologiiУслугаModel
  },

  'application-name': 'Klinika_ stomatologii',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Klinika_ stomatologii',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Klinika_ stomatologii',
          title: 'Klinika_ stomatologii'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'klinika-stomatologii': {
          caption: 'Klinika_Stomatologii',
          title: 'Klinika_Stomatologii',
          'i-i-s-klinika-stomatologii-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-klinika-stomatologii-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-klinika-stomatologii-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-klinika-stomatologii-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-klinika-stomatologii-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-klinika-stomatologii-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-klinika-stomatologii-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-klinika-stomatologii-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-klinika-stomatologii-материал-l': {
            caption: 'Материал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-klinika-stomatologii-должность-l': IISKlinika_StomatologiiДолжностьLForm,
    'i-i-s-klinika-stomatologii-запись-l': IISKlinika_StomatologiiЗаписьLForm,
    'i-i-s-klinika-stomatologii-кабинет-l': IISKlinika_StomatologiiКабинетLForm,
    'i-i-s-klinika-stomatologii-клиент-l': IISKlinika_StomatologiiКлиентLForm,
    'i-i-s-klinika-stomatologii-материал-l': IISKlinika_StomatologiiМатериалLForm,
    'i-i-s-klinika-stomatologii-оплата-l': IISKlinika_StomatologiiОплатаLForm,
    'i-i-s-klinika-stomatologii-производитель-l': IISKlinika_StomatologiiПроизводительLForm,
    'i-i-s-klinika-stomatologii-сотрудник-l': IISKlinika_StomatologiiСотрудникLForm,
    'i-i-s-klinika-stomatologii-услуга-l': IISKlinika_StomatologiiУслугаLForm,
    'i-i-s-klinika-stomatologii-должность-e': IISKlinika_StomatologiiДолжностьEForm,
    'i-i-s-klinika-stomatologii-запись-e': IISKlinika_StomatologiiЗаписьEForm,
    'i-i-s-klinika-stomatologii-кабинет-e': IISKlinika_StomatologiiКабинетEForm,
    'i-i-s-klinika-stomatologii-клиент-e': IISKlinika_StomatologiiКлиентEForm,
    'i-i-s-klinika-stomatologii-материал-e': IISKlinika_StomatologiiМатериалEForm,
    'i-i-s-klinika-stomatologii-оплата-e': IISKlinika_StomatologiiОплатаEForm,
    'i-i-s-klinika-stomatologii-производитель-e': IISKlinika_StomatologiiПроизводительEForm,
    'i-i-s-klinika-stomatologii-сотрудник-e': IISKlinika_StomatologiiСотрудникEForm,
    'i-i-s-klinika-stomatologii-услуга-e': IISKlinika_StomatologiiУслугаEForm
  },

});

export default translations;
