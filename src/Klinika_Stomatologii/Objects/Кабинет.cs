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
    /// Кабинет.
    /// </summary>
    // *** Start programmer edit section *** (Кабинет CustomAttributes)

    // *** End programmer edit section *** (Кабинет CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КабинетE", new string[] {
            "НомерКабинета as \'Номер кабинета\'"})]
    [View("КабинетL", new string[] {
            "НомерКабинета as \'Номер кабинета\'"})]
    public class Кабинет : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКабинета;
        
        // *** Start programmer edit section *** (Кабинет CustomMembers)

        // *** End programmer edit section *** (Кабинет CustomMembers)

        
        /// <summary>
        /// НомерКабинета.
        /// </summary>
        // *** Start programmer edit section *** (Кабинет.НомерКабинета CustomAttributes)

        // *** End programmer edit section *** (Кабинет.НомерКабинета CustomAttributes)
        public virtual int НомерКабинета
        {
            get
            {
                // *** Start programmer edit section *** (Кабинет.НомерКабинета Get start)

                // *** End programmer edit section *** (Кабинет.НомерКабинета Get start)
                int result = this.fНомерКабинета;
                // *** Start programmer edit section *** (Кабинет.НомерКабинета Get end)

                // *** End programmer edit section *** (Кабинет.НомерКабинета Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кабинет.НомерКабинета Set start)

                // *** End programmer edit section *** (Кабинет.НомерКабинета Set start)
                this.fНомерКабинета = value;
                // *** Start programmer edit section *** (Кабинет.НомерКабинета Set end)

                // *** End programmer edit section *** (Кабинет.НомерКабинета Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КабинетE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КабинетE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КабинетE", typeof(IIS.Klinika_Stomatologii.Кабинет));
                }
            }
            
            /// <summary>
            /// "КабинетL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КабинетL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КабинетL", typeof(IIS.Klinika_Stomatologii.Кабинет));
                }
            }
        }
    }
}
