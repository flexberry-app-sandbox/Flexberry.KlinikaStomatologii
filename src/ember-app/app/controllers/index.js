import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.klinika-stomatologii.caption'),
          title: i18n.t('forms.application.sitemap.klinika-stomatologii.title'),
          children: [{
            link: 'i-i-s-klinika-stomatologii-услуга-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-услуга-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-запись-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-запись-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-оплата-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-оплата-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-должность-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-производитель-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-производитель-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-клиент-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-клиент-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-сотрудник-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-кабинет-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-кабинет-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-klinika-stomatologii-материал-l',
            caption: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.klinika-stomatologii.i-i-s-klinika-stomatologii-материал-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})