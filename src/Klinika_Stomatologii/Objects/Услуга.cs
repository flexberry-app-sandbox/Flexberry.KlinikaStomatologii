﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Klinika_Stomatologii
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуга.
    /// </summary>
    // *** Start programmer edit section *** (Услуга CustomAttributes)

    // *** End programmer edit section *** (Услуга CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугаE", new string[] {
            "КодУслуги as \'Код услуги\'",
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    [AssociatedDetailViewAttribute("УслугаE", "СоставУслуги", "СоставУслугиE", true, "", "Состав услуги", true, new string[] {
            ""})]
    [View("УслугаL", new string[] {
            "КодУслуги as \'Код услуги\'",
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    public class Услуга : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодУслуги;
        
        private string fНаименование;
        
        private double fЦена;
        
        private IIS.Klinika_Stomatologii.DetailArrayOfСоставУслуги fСоставУслуги;
        
        // *** Start programmer edit section *** (Услуга CustomMembers)

        // *** End programmer edit section *** (Услуга CustomMembers)

        
        /// <summary>
        /// КодУслуги.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.КодУслуги CustomAttributes)

        // *** End programmer edit section *** (Услуга.КодУслуги CustomAttributes)
        public virtual int КодУслуги
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.КодУслуги Get start)

                // *** End programmer edit section *** (Услуга.КодУслуги Get start)
                int result = this.fКодУслуги;
                // *** Start programmer edit section *** (Услуга.КодУслуги Get end)

                // *** End programmer edit section *** (Услуга.КодУслуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.КодУслуги Set start)

                // *** End programmer edit section *** (Услуга.КодУслуги Set start)
                this.fКодУслуги = value;
                // *** Start programmer edit section *** (Услуга.КодУслуги Set end)

                // *** End programmer edit section *** (Услуга.КодУслуги Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Наименование CustomAttributes)

        // *** End programmer edit section *** (Услуга.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Наименование Get start)

                // *** End programmer edit section *** (Услуга.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Услуга.Наименование Get end)

                // *** End programmer edit section *** (Услуга.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Наименование Set start)

                // *** End programmer edit section *** (Услуга.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Услуга.Наименование Set end)

                // *** End programmer edit section *** (Услуга.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Цена CustomAttributes)

        // *** End programmer edit section *** (Услуга.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Цена Get start)

                // *** End programmer edit section *** (Услуга.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Услуга.Цена Get end)

                // *** End programmer edit section *** (Услуга.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Цена Set start)

                // *** End programmer edit section *** (Услуга.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Услуга.Цена Set end)

                // *** End programmer edit section *** (Услуга.Цена Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.СоставУслуги CustomAttributes)

        // *** End programmer edit section *** (Услуга.СоставУслуги CustomAttributes)
        public virtual IIS.Klinika_Stomatologii.DetailArrayOfСоставУслуги СоставУслуги
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.СоставУслуги Get start)

                // *** End programmer edit section *** (Услуга.СоставУслуги Get start)
                if ((this.fСоставУслуги == null))
                {
                    this.fСоставУслуги = new IIS.Klinika_Stomatologii.DetailArrayOfСоставУслуги(this);
                }
                IIS.Klinika_Stomatologii.DetailArrayOfСоставУслуги result = this.fСоставУслуги;
                // *** Start programmer edit section *** (Услуга.СоставУслуги Get end)

                // *** End programmer edit section *** (Услуга.СоставУслуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.СоставУслуги Set start)

                // *** End programmer edit section *** (Услуга.СоставУслуги Set start)
                this.fСоставУслуги = value;
                // *** Start programmer edit section *** (Услуга.СоставУслуги Set end)

                // *** End programmer edit section *** (Услуга.СоставУслуги Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаE", typeof(IIS.Klinika_Stomatologii.Услуга));
                }
            }
            
            /// <summary>
            /// "УслугаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаL", typeof(IIS.Klinika_Stomatologii.Услуга));
                }
            }
        }
    }
}
